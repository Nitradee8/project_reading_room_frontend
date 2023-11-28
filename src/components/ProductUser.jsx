import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"

export default function ProductUser() {
    const [productUser, setProductUser] = useState([]);


    const handleCilckAddBookshelfUser = async (bookId) => {
        try {
            await axios.post(`/product/postaddbook/${bookId}`);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = () => {
        axios.get('/product/allproduct').then((res) => setProductUser(res.data.allProduct))
    }
    console.log(productUser)

    return (
        <>
     
            <div className="p-3 w-screen" >
                <div className="grid grid-cols-2 gap-4 px-[300px]">
                    {productUser.map((el) => (
                        <div className=" flex justify-center items-center" key={el.id} >
                            <div className="flex rounded-2xl p-6 bg-stone-300 w-[700px] h-[400px] ">
                                <div className="flex gap-6 p-2 justify-center items-center">
                                    <img src={el.image} alt={el.title} width={100} height={50} />
                                    <div className="">
                                        <div className="flex flex-col gap-3 p-4">
                                            <p className="text-xl">{el.bookname}</p>
                                            <p className="text-xl">{el.category.name}</p>
                                            <p className="text-xl ">{el.author.name}</p>
                                            <p className="text-xl">{el.description}</p>
                                            <p className="text-xl" to="price" >{el.price}</p>
                                            <button className="bg-red-600 rounded-lg w-40 p-2 text-center text-white " onClick={() => handleCilckAddBookshelfUser(el.id)} >Add Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}