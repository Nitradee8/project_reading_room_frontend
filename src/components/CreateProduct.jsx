// import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { useState } from 'react';

export default function CreateProduct({setMode}) {
    // const navigate = useNavigate();

    const [input, setInput] = useState({
        
        categoryId: "",
        bookname: "",
        price: "",
        description: "",
        image: "",
        authorId: ""
    });

    const handleSubmitForm = async (e) => {
        try {
            
            e.preventDefault();
            const formData = new FormData();
            for (let key in input) {
                formData.append(key, input[key]);
            }
            
            const newProduct = await axios.post("/product/createproduct", formData);
            console.log(newProduct, "product");
            setMode("AllProduct")
          
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center rounded-lg bg-slate-400 w-[700px] h-[500px]">
                <div className="flex flex-col gap-8 w-[600px]">
                    <div className="text-center">
                        <p className="flex text-white font-mono">Create Product</p>
                    </div>
                    <input
                        type="text"
                        onChange={(e) => setInput({ ...input, bookname: e.target.value })}
                        value={input.name}
                        placeholder="bookName"
                    />

                    <input
                        type="text"
                        onChange={(e) => setInput({ ...input, categoryId: e.target.value })}
                        placeholder="Category"
                    />

                    <input
                        type="text"
                        onChange={(e) => setInput({ ...input, description: e.target.value })}
                        placeholder="Description"
                    />

                    <input
                        type="text"
                        onChange={(e) => setInput({ ...input, authorId: e.target.value })}
                        placeholder="Author"
                    />

                    <input
                        type="text"
                        onChange={(e) => setInput({ ...input, price: e.target.value })}
                        placeholder="Price"
                    />

                    <input
                        type="file"
                        onChange={(e) => {
                            if(e.target.files[0]){
                                setInput({ ...input, image: e.target.files[0] })
                            }
                         }}
                        placeholder=""
                    />
                </div>
                <div className="flex gap-8 pt-6">
                    <button className="bg-green-600 p-2 rounded-xl text-lg text-white font-mono" onClick={handleSubmitForm} >Create</button>
                    <button className="bg-red-600 p-2 rounded-xl text-lg text-white font-mono" >Cancel</button>
                </div>
            </div>
        </>
    )
}