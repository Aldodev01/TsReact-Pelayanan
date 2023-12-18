import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Statistik from "./Statistik";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Statistik />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
