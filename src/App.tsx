
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
        path="/"
        element={<DataTable columns={columns} data={data} loading={loading} />}
      />
      <Route path="/customtable" element={<JiraIssuesTable data={data} loading={loading} />} />
    </Routes>
  );
}

export default App;