import  { useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Footer from "../../components/Footer";

const Ulasan = () => {
  const [range, setRange] = useState("0");
  const { id } = useParams();
  const [disabled, setDisabled] = useState(false);
  
  const fetcher = async () => {
    const response = await axios.get(`http://localhost:8080/pelayanan/${id}`);
    return response.data;
  };
  const { data } = useSWR("ulasan", fetcher);

  const sendResponse = async () => {
    await axios.post("http://localhost:8080/ulasan/", {
      rate: Number(range),
      pelayananId: id
    }).then((res: unknown) => {
      console.log(res, "res");
      setDisabled(!disabled);
      mutate('ulasan')
    })
    return
  };

  function getRange(isi: string) {
    const rate = Number(isi);
    if (rate > 80) {
      return "Sangat Suka";
    } else if (rate > 60) {
      return "Suka";
    } else if (rate > 40) {
      return "Biasa";
    } else {
      return "Tidak Suka";
    }
  }

  // const handleKirim = () => {
  //   alert("Survey Terkirim, Have a Nice Day :)");
  //   setDisabled(!disabled);
  // };
  if (!data) return <h2>Loading...</h2>;
  console.log(data?.data);


  return (
    <main className="w-full h-full flex flex-col items-center">
      <Navbar />
      <br />
      <div className="w-full max-w-[700px] h-full p-[20px] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={data && data?.data.photo}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5">
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {data && data?.data?.title}
            </h3>
            <p className="mt-4.5">{data && data?.data?.description}</p>

            <br />
            <br />

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                Seberapa Puas Anda Terhadap Pelayanan Kami?
              </h4>
              <br />
              <div>
                <label className="mb-2 flex gap-4 text-black dark:text-white">
                  {getRange(range)} - {range}
                </label>
                <div className="w-full flex gap-4 items-center justify-center">
                  <input
                    type="range"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    placeholder="Default textarea"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {!disabled  && <button
                    disabled={
                      disabled ? true : Number(range) < 1 ? true : false
                    }
                    className={`inline-flex items-center justify-center rounded-full text-center font-medium  hover:bg-opacity-90 px-4 xl:px-8 ${
                      Number(range) < 1
                        ? "bg-gray text-black"
                        : "bg-primary text-white"
                    }`}
                    onClick={sendResponse}
                  >
                    Kirim
                  </button>}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold">Komentar</p>
        <br />
        <br />
        {data &&
          // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
          data?.data?.Ulasan.map((e: any) => {
            return (
              <div key={e.id} className="mb-5 w-full gap-4 flex align-center ">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                </div>
                <div className="mt-2 text-center flex flex-col">
                  <span className=" text-lg font-medium text-gray-600 dark:text-white">
                    Anonym
                  </span>
                  <span className="mt-2 text-xs text-gray-400">
                    {e?.category == "SangatSuka"
                      ? "Sangat Suka"
                      : e?.category == "TidakSuka" && "Tidak Suka"}{" "}
                    - {e?.rate}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Ulasan;
