import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { usePagesStore } from "@/feature/pagination";

export const Filtration = ({ selectedGender, onChange }: FiltrationProps) => {
  const { genderFilter, setGenderFilter } = usePagesStore();

  const handleChange = onChange ?? setGenderFilter;
  const selectedValue = selectedGender ?? genderFilter;

  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="w-[250px] bg-white text-black">
        <SelectValue placeholder="Filter by gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="hermaphrodite">Hermaphrodite</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

interface FiltrationProps {
  selectedGender?: string;
  onChange?: (value: string) => void;
}
