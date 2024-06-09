
import { columns } from "./components/ShadcnTable/columns";
import { DataTable } from "./components/ShadcnTable/data-table";
import { Route, Routes } from "react-router-dom";
import useFetchData from "./hooks/useFetchIssues";
import JiraIssuesTable from "./components/CustomTable/Data";
import "./App.css";

function App() {
  const { data, loading } = useFetchData(import.meta.env.VITE_API);

  return (
    <Routes>
      <Route
        path="/customtable"
        element={<DataTable columns={columns} data={data}  />}
      />
      <Route path="/" element={<JiraIssuesTable data={data} loading={loading} />} />
    </Routes>
  );
}

export default App;
