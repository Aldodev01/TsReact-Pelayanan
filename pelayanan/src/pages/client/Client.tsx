import { Route, Routes } from "react-router-dom";
import Pelayanan from "./Pelayanan";
import Ulasan from "./Ulasan";

const Client = () => {
  return (
    <Routes>
      <Route>
        <Route index path="/" element={<Pelayanan />} />
        <Route path="/ulasan/:id" element={<Ulasan />} />
      </Route>
    </Routes>
  );
};

export default Client;
