import { useState } from "react";
import CreateProduct from "../components/CreateProduct";


export default function AdminPage() {
  const [mode, setMode] = useState();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-amber-100 p-5 w-[400px] h-full">
        <div className="p-5 active:text-MonoColor-600 active:bg-Primary-light text-lg font-sans hover:font-serif">
          <p onClick={() => setMode("CreateProduct")} >Create Product</p>
        </div>
        <hr />
        <div className="p-5 active:text-MonoColor-600 active:bg-Primary-light text-lg font-sans hover:font-serif">
          <p onClick={() => setMode("DeleteProduct")} >All Product</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">{mode === "CreateProduct" ? <CreateProduct /> : ""}
      </div>
    </div>
  )
}
