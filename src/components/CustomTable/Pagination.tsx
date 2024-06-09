import { PaginationProps } from "../../misc/interface";
import { Button } from "../ui/button";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }:PaginationProps) => {
  return (
    <div className="mt-4 flex justify-end ">
      <div className="flex justify-around w-full">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage===1}
        >
          Previous
        </Button>
        <h3 >{`Page ${currentPage} of ${Math.ceil(totalItems/itemsPerPage)}`}</h3>
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage>=Math.ceil(totalItems/itemsPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
