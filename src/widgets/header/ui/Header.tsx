import logo from "/public/images/logo.webp";
import { Search } from "../../../feature/search/ui/Search";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[90px] flex items-center justify-between mx-auto pt-3 px-6">
      <img
        src={logo}
        className="h-[80px] w-[200px] cursor-pointer"
        onClick={() => navigate("/characters")}
        alt="Logo"
      />

      <Search />
    </header>
  );
};
