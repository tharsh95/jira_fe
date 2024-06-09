import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownProps } from "../../misc/interface";

function DropdownMenuDemo({ dropdownKey, setFilter, filter }:DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          {filter}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropdownKey?.map((el) => (
          <DropdownMenuItem
            key={el}
            onClick={() => setFilter(el)}
            className="capitalize hover:bg-gray-200 cursor-pointer"
          >
            {el}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenuDemo;
