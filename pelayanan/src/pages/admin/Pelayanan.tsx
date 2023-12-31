/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import Modale from "../../components/Modal";

const Pelayanan = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        photo: "pelayanan",
        image: null
    })

    console.log(input);
    

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal((prev) => !prev)
    }

  const fetcher = async () => {
    const response = await axios.get("http://localhost:8080/pelayanan");
    return response.data;
  };

  const handleDelete = async (id: string) => {
    const response = await axios.delete(`http://localhost:8080/pelayanan/${id}`).then(() => {
      mutate("pelayanan")
      alert("Berhasil Menghapus Data " + id)
    })
    return response
  };

  const { data } = useSWR("pelayanan", fetcher);
  if (!data) return <h2>Loading...</h2>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('description', input.description);
    formData.append('photo', input.photo);
    if (input.image) {
        formData.append('image', input.image);
    }

    try {
      const response = await axios.post("http://localhost:8080/pelayanan", formData);
      console.log("Response:", response.data);
      mutate("pelayanan")
      setModal(false)
    } catch (error) {
      console.error("Error:", error);
    }
    return
  };

  const handleOnChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files.length > 0) {
        setInput((prevState) => ({
          ...prevState,
          [name]: files[0],
        }));
      } else {
        setInput((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
  };

  return (
    <>
    <br/>
    <h1 className="mb-2 text-xl font-medium text-black">
        Daftar Pelayanan
      </h1>
    <div className="w-full flex items-center justify-end"> 
    <button className="inline-flex items-center justify-center rounded-xl text-center font-medium hover:bg-opacity-90 px-4 py-2 bg-primary text-white"
            onClick={handleModal}
            >
             +
     </button>
    </div>
    <br/>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full bg-white text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    title
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    description
                </th>
                <th scope="col" className="px-6 py-3">
                    photo
                </th>
                <th scope="col" className="px-6 py-3">
                    action
                </th>
            </tr>
        </thead>
        <tbody>
            {data && data.data.map((e: any) => {
                return (
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {e.id}
                        </th>
                        <td className="px-6 py-4">
                            {e.title}
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {e.description}
                        </td>
                        <td className="px-6 py-4">
                            <img
                                alt="moto"
                                src={e?.photo}
                                className=" w-[50px] h-[50px] object-cover object-center"
                            />
                        </td>
                        <td className="px-6 py-4">
                        <button       
                            className={`inline-flex w-full items-center justify-center rounded-full text-center font-medium  hover:bg-opacity-90 py-[5px] bg-primary text-white`}
                            onClick={() => handleDelete(e.id)}
                        >
                            Delete
                        </button>
                        </td>

                </tr>
                )
            })}
        </tbody>
    </table>
</div>

        <Modale open={modal} handleClose={handleModal}>
            
            <form action="action" onSubmit={handleSubmit} className="w-full flex flex-col gap-4 items-center justify-center">
                <h4 className="font-semibold text-black dark:text-white">
                    Tambahkan Data Pelayanan
                </h4>
                <br/>
                <input
                    type="title"
                    name="title"
                    value={input.title}
                    onChange={handleOnChange}
                    placeholder="Title"
                    className="w-full rounded-lg border-[1.5px] border-stroke p-[5px] bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <input
                    type="description"
                    name="description"
                    value={input.description}
                    onChange={handleOnChange}
                    placeholder="Description"
                    className="w-full rounded-lg border-[1.5px] border-stroke p-[5px] bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
               
                <input
                    type="file"
                    name="image"
                    onChange={handleOnChange}
                    className="w-full rounded-lg border-[1.5px] border-stroke p-[5px] bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <button       
                    className={`inline-flex w-full items-center justify-center rounded-full text-center font-medium  hover:bg-opacity-90 py-[5px] bg-primary text-white`}
                    type="submit"
                >
                    Kirim
                </button>
            </form>
        </Modale>

    </>
  );
};

export default Pelayanan;
