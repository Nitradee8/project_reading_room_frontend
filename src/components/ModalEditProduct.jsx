import { useState } from "react";
import InputEditForm from "../features/auth/InputEditFrom";
import { useEffect } from "react";
import ButtonSave from "../features/admin/ButtonSave";
import axios from "../config/axios";

export default function ModalEditProduct({

    open, el, setIsOpen, bookName, description, price, setAllProduct, bookId, getProduct
}) {
    // console.log(el)

    // console.log(bookName)
    // console.log(description)
    // console.log(price)
    // console.log(bookId)
  

    const [input, setInput] = useState({
        bookName: "",
        Description: "",
        Price: ""
    });

    // const [error, setError] = useState({});

    useEffect(() => {
     
        setInput({
            bookname: `${bookName}`,
            description: `${description}`,
            price: `${price}`
           
        });
   
    }, [open]);


    const handleOnChangInput = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    // const handleOnChangInput = async (id) => {
    //     try {
    //         await axios.patch(`/product/update/`)
    //             .then((res) => setAllProduct(res.data.allProduct))
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const handleSubmitEdit = async()=>{
        try {
          const res =   await axios.patch(`/product/update/${bookId}`,input)
          console.log(res.data)
          getProduct()
          setIsOpen(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {open &&
                <div>
                    <div className="fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                    <div className="fixed inset-0 z-30">
                        <div className="flex justify-center items-center min-h-full">
                            <div className="flex flex-col items-center justify-start h-[320px] w-[500px] bg-MonoColor-100 rounded-3xl gap-4">
                                <div className="flex flex-col items-end pr-8 w-full pt-6">
                                    <span className="material-symbols-outlined text-MonoColor-600  hover:cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >X</span>
                                </div>

                                <form className="flex flex-col justify-center gap-6" >
                                    <div className="flex flex-col gap-4 justify-end items-end pr-[16px] pt-4 w-full">
                                        <InputEditForm
                                            title="book name"
                                            name="bookname"
                                            value={input?.bookname}
                                            onChange={handleOnChangInput}
                                        />
                                    </div>
                                    <div>
                                        <InputEditForm
                                            title="Description"
                                            name="description"
                                            value={input?.description}
                                            onChange={handleOnChangInput}
                                        />
                                    </div>
                                    <div>
                                        <InputEditForm
                                            title="Price"
                                            name="price"
                                            value={input?.price}
                                            onChange={handleOnChangInput}
                                        />
                                    </div>
                                    <div className="flex justify-center pt-6">
                                        <ButtonSave onClick={(e)=>{
                                        e.preventDefault()
                                            handleSubmitEdit()
                                    }
                                        }
                                            title="Confirm edit"
                                            type="submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                </div>
            }
        </>
    );
}
