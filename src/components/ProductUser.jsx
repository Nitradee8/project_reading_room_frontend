import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"

export default function ProductUser() {
    const [productUser, setProductUser] = useState([]);


    const handleCilckAddBookshelfUser = async (id) => {
        try {
            await axios.post(`/product/postaddbook/${id}`);
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
        <div className="grid grid-cols-2 gap-6">

            {productUser.map((el) => (
                <div key={el.id} className="w-full">
                    <div className="gap-10 rounded-2xl p-8 bg-stone-300 w-[800px] h-[300px]">
                        <div className="flex gap-5">
                            <img src={el.image} alt={el.title} width={100} height={50} />
                            <div className="flex flex-col gap-5">
                                <p className="text-xl">{el.bookname}</p>
                                <p className="text-xl">{el.categoryId}</p>
                                <p className="text-xl">{el.description}</p>
                                <p className="text-xl" to="price" >{el.price}</p>
                                <div className="flex gap-6">
                                    <button className="bg-red-600 cursor-pointer rounded-lg w-52 p-2 text-center text-white" onClick={() =>  handleCilckAddBookshelfUser(el.id) } >Add Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}