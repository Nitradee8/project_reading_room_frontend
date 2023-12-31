import { useState } from "react";
import axios from "../config/axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function BookshelfUserPage() {
    const [allBasket, setAllbasket] = useState([])

    useEffect(() => {
        getAllbasket()
    }, [])

    const getAllbasket = async () => {
        try {
            await axios.get('/product/getallbasket').then((res) => { setAllbasket(res.data.getAllBaskets); console.log(res.data) }).catch(err => console.log(err))

        } catch (error) {
            console.log(error)
        }
    }

    console.log(allBasket)
    return (
        <>
            <p className="text-[20px] font-bold py-8 px-56 text-back">ชั้นวางหนังสือ</p>

            <div className="grid grid-cols-2 w-full  justify-center items-center">
                {allBasket.map((el) => (
                    <>
                    <div className=" flex justify-center">

                        <div className="flex  p-6 w-[700px] h-[500px]" key={el.id}>
                            <div className="flex gap-4 bg-amber-200 rounded-2xl p-4 w-full">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="flex fl">
                                        <Link to={`/bookshelfpage/${el.productId}`}>
                                            <img src={el.product.image} className="w-[500px]" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-10 p-10">
                                        <p className="text-[30px] underline md:underline-offset-4">{el.product.bookname}</p>
                                        <p className="text-[25px] text-orange-500">{el.product.category.name}</p>
                                        <p className="text-[25px] text-orange-500">{el.product.author.name}</p>
                                        <p className="text-[25px] w-[400px] h-[70px] overflow-y-scroll rounded-xl no-scrollbar">{el.product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    </>

                ))}
                {/* <div className="flex flex-cols p-6">
                    <div className="flex justify-start gap-7 bg-amber-200 rounded-2xl p-10">
                        <div className="flex">
                            <Link to="/bookshelfpage/readbook">
                                <img src="/src/assets/ขนเสบียง1.jpg" />
                            </Link>
                            <div className="flex flex-col gap-10 p-10">
                                <p className="text-[30px] underline md:underline-offset-4">ขนเสบียงนับล้าน มาเป็นมาร(ดา)ของเหล่าวายร้าย เล่ม 1</p>
                                <p className="text-[25px] text-orange-500">อดีต ปัจจุบัน อนาคต</p>
                                <p className="text-[25px] text-orange-500">Xianaan</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}
