import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface YearDropdownProps {
  selectedYear: string;
  onChange: (year: string) => void;
}

const YearDropdown = ({ selectedYear, onChange }: YearDropdownProps) => {
  const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) =>
    (2006 + i).toString()
  );

  return (
    <div className="w-[8rem] font-league">
      <Select value={selectedYear} onValueChange={onChange}>
        <SelectTrigger className="w-[8rem] h-[3rem] text-[1.3rem] p-[1rem] rounded-t-[1rem]">
          {" "}
          <SelectValue placeholder="Ano" />
        </SelectTrigger>
        <SelectContent className="bg-[black] w-[8rem] border-white text-[1.3rem] rounded-b-[1rem]">
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearDropdown;
