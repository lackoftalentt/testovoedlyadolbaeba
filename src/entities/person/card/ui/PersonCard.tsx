import { Button } from "@/shared/ui/button";
import { Link, useLocation } from "react-router-dom";
import { memo } from "react";
import { checkIsPersonDetail } from "@/entities/person/modal";
import type { PersonData } from "../../model/types";
import { useModalStore } from "../../modal/model/modalStore";

export const PersonCard = memo(({ person }: PersonCardProps) => {
  const { setPersonUrl } = useModalStore();
  const location = useLocation();

  const url = checkIsPersonDetail(person) ? person.properties.url : person.url;
  const name = checkIsPersonDetail(person)
    ? person.properties.name
    : person.name;
  const uid = person.uid;

  const handleClick = () => {
    setPersonUrl(url);
  };

  return (
    <Link
      to={uid}
      state={{ backgroundLocation: location }}
      onClick={handleClick}
      className="w-full cursor-pointer"
    >
      <Button className="bg-white w-full text-black hover:bg-white/80 cursor-pointer">
        {name}
      </Button>
    </Link>
  );
});

interface PersonCardProps {
  person: PersonData;
}
