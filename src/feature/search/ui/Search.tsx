import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LoupeIcon } from "../assets/LoupeIcon";
import { useDebounce } from "../lib/useDebounce";
import { useSearchStore } from "../model/searchStore";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const { setQuery } = useSearchStore();

  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState("");
  const debounceQuery = useDebounce(value, 300);

  useEffect(() => {
    const urlQuery = searchParams.get("query");
    if (urlQuery) {
      setValue(urlQuery);
    }
  }, []);

  useEffect(() => {
    const currentQuery = searchParams.get("query");

    if (debounceQuery && debounceQuery !== currentQuery) {
      navigate(`/search?query=${encodeURIComponent(debounceQuery)}`, {
        state: { backgroundLocation: location },
      });
      setQuery(debounceQuery);
    }

    if (debounceQuery === "") {
      navigate("/");
    }
  }, [debounceQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LoupeIcon />
        </div>
        <input
          type="search"
          className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search"
          required
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};
