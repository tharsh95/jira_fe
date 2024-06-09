export interface Issue {
    _id: string;
    issueKey: string;
    summary: string;
    issueType: string;
    status: string;
    assignee: string;


  }
  
  export interface IssueProps {
    data: Issue[];
    loading:boolean
  }

  export interface DropDownProps {
    dropdownKey: string[];
    setFilter: (el:string) => void;
    filter: string;
  }

  export interface PaginationProps{
    itemsPerPage:number
    totalItems:number;
    currentPage:number,
    paginate:(el:number)=>void
}