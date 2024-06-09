import { useState, SetStateAction, useMemo, useRef } from "react";
import { Input } from "../ui/input";
import { getKeys } from "../../misc/utils";
import { Issue, IssueProps } from "../../misc/interface";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import DropdownMenuDemo from "./DropDown";
import SkeletonLoader from "./SkeletonLoader";
import Pagination from "./Pagination";

const JiraIssuesTable = ({ data, loading }: IssueProps) => {
  const [filter, setFilter] = useState<string>("issueKey");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const itemsPerPage = 10;

  const isFilterableKey = (key: string): key is keyof Issue => {
    return ["issueKey", "summary", "issueType", "status", "assignee"].includes(
      key
    );
  };

  const keys = getKeys(data);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return data;
    if (!isFilterableKey(filter)) return data;
    return data.filter((item) =>
      item[filter]?.toLowerCase().includes(searchTerm)
    );
  }, [data, filter, searchTerm]);

  const handleDropdownSelect = (newFilter: string) => {
    setFilter(newFilter);
    if (inputRef.current) {
      inputRef.current.focus();
      const value = inputRef.current.value;
      inputRef.current.value = "";
      inputRef.current.value = value;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold ">Jira Issues</h1>
        <Button>
          <Link to="/shadcn">Shadcn Table</Link>
        </Button>
      </div>
      <div className="mb-4 flex">
        <Input
          placeholder={`Search by ${filter}`}
          ref={inputRef}
          onChange={handleFilterChange}
        />
        <DropdownMenuDemo
          dropdownKey={keys}
          setFilter={handleDropdownSelect}
          filter={filter}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Issue Key</th>
              <th className="py-2 px-4 border-b">Summary</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : filtered.length === 0
              ? Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : currentItems.map((issue) => (
                  <tr key={issue._id} className="even:bg-gray-50">
                    <td className="py-2 px-4 border-b border-l border-black">
                      {issue.issueKey}
                    </td>
                    <td className="py-2 px-4 border-b border-l border-black">
                      {issue.summary}
                    </td>
                    <td className="py-2 px-4 border-b border-l border-black">
                      {issue.issueType}
                    </td>
                    <td className="py-2 px-4 border-b border-l border-black">
                      {issue.status}
                    </td>
                    <td className="py-2 px-4 border-b border-l border-black">
                      {issue.assignee !== " " ? issue.assignee : "Unassigned"}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filtered.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default JiraIssuesTable;
