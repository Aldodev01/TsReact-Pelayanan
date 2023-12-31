import  { useState } from "react";
import Footer from "../../components/Footer";
import Logo from "../../assets/uranus.png";

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignin = () => {
    window.localStorage.setItem("sx", username)
    window.localStorage.setItem("px", password)
    if(username !== "@dm1n" && password !== "p@ssw0rd"){
        setTimeout(() => {
         alert("Username dan Password Salah")
        }, 1000);
      } else {
        window.location.href = "/admin"
      }
  }


  return (
    <main className="w-full h-full flex flex-col items-center">
      <br />
      <div className="w-full max-w-[700px] h-full p-[20px] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
        <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5">
          <div className="mt-4">
          <div className="flex flex-col flex-grow items-center gap-4 py-2 px-4 md:px-6 2xl:px-11" >
            <div className="h-[120px] w-[120px]">
                <img
                src={Logo}
                className="w-full h-full object-contain object-center"
                alt="Logo"
                />
            </div>
            <h2 className="lg:text-xl text-sm text-black">Survey Pelayanan</h2>
        </div>
        <br/>
        <br/>
        <br/>

        <div className="mx-auto max-w-180">

                <h4 className="font-semibold text-black dark:text-white">
                    Selamat Datang Di Dashboard Pelayanan
                </h4>
            <br />
            <div>
               
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full rounded-lg border-[1.5px] border-stroke p-[5px] bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-lg border-[1.5px] border-stroke p-[5px] bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <button
                
                className={`inline-flex w-full items-center justify-center rounded-full text-center font-medium  hover:bg-opacity-90 py-[5px] bg-primary text-white`}
                onClick={handleSignin}
                >
                Kirim
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>

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

export default Signin;
