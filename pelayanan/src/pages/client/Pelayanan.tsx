import axios from "axios";
import { Link } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../../components/Navbar";

const Pelayanan = () => {
  // const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5001/pelayanan");
    console.log("data", response.data);
    return response.data;
  };

  const { data } = useSWR("products", fetcher);
  if (!data) return <h2>Loading...</h2>;

  // const deleteProduct = async (productId) => {
  //   await axios.delete(`http://localhost:5001/products/${productId}`);
  //   mutate("products");
  // };

  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-4 items-center">
      <Navbar />
      <h1 className="mb-2 text-xl font-medium text-gray-800">
        Daftar Pelayanan
      </h1>
      <br />
      <br />

      {data &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.data.map((e: any) => {
          return (
            <Link to={`ulasan/${e?.id}`}>
              <div className="relative w-[350px] p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                <img
                  alt="moto"
                  src={e?.photo}
                  className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"
                />
                <div className="w-4/6">
                  <p className="mb-2 text-lg font-medium text-gray-800">
                    {e?.title}
                  </p>
                  <p className="text-xs text-gray-400">{e?.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Pelayanan;
