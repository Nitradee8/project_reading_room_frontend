import { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import AllProduct from "../components/AllProduct";


export default function AdminPage() {
  const [mode, setMode] = useState();

  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" bg-amber-100 p-5 w-[400px] h-screen">
          <div className="p-5 active:text-MonoColor-600 active:bg-Primary-light text-lg font-sans hover:font-serif">
            <p onClick={() => setMode("CreateProduct")} >Create Product</p>
          </div>
          <hr />
          <div className="p-5 active:text-MonoColor-600 active:bg-Primary-light text-lg font-sans hover:font-serif">
            <p onClick={() => setMode("AllProduct")} >All Product</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-center items-center">{mode === "CreateProduct" ? <CreateProduct setMode={setMode} /> : ""}</div>
          <div className="flex w-full justify-center items-center">{mode === "AllProduct" ? <AllProduct /> : ""}</div>
        </div>
      </div>


    </>

  )
}
