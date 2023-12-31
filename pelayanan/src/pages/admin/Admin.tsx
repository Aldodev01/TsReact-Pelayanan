import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Statistik from "./Statistik";
import Signin from "./Signin";
import Pelayanan from "./Pelayanan";
import Ulasan from "./Ulasan";

const Admin = () => {

  return (
    <>
      <Routes>
          <Route index path="/signin" element={<Signin />} /> 
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Statistik />} />
            <Route path="/admin/pelayanan"  element={<Pelayanan />} />
            <Route path="/admin/ulasan"  element={<Ulasan />} />


          </Route>
      </Routes>
    </>
  );
};

export default Admin;
