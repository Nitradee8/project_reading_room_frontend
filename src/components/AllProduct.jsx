import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"


export default function AllProduct() {

    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        axios.get('/product/allproduct').then((res) => setAllProduct(res.data.allProduct))
    }, [])

    console.log(allProduct)

    return (
        <div className="grid grid-cols-2 gap-6">
            {allProduct.map((el, index) => (
                <div key={index} className="w-full">
                    <div className="gap-10 rounded-2xl p-8 bg-stone-300 w-[800px] h-[300px]">
                        <div className="flex gap-5">
                            <img src={el.image} alt={el.title} width={100} height={50} />
                            <div className="flex flex-col gap-5">
                                <p className="text-xl">{el.bookname}</p>
                                <p className="text-xl">{el.categoryId}</p>
                                <p className="text-xl">{el.description}</p>
                                <p className="text-xl" to="price" >{el.price}</p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}