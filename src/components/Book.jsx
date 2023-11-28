
import axios from "../config/axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Book() {
    const [allData,setAllData] = useState([])
    const {id} = useParams();


    useEffect(() => {
        content()
    }, [])
    const content = async () => {
        try {
            await axios.get(`/product/getBookpage/${id}`).then((res)=>setAllData(res.data.getBookPage)).catch(error=>console.log(error))
        } catch (error) {
            console.log(error)
        }
    }
    console.log(allData)
    return (
        <div>
            <div className="grid grid-row gap-10  px-52 py-40">
                <img src={allData.image} className="flex border-box w-[350px] h-[500px]" />
                <div className="flex flex-col gap-10 p-10">
                    <p className="text-[30px] underline md:underline-offset-4">{allData?.bookname}</p>
                    <p className="text-[25px] text-orange-500">{allData?.category?.name}</p>
                    <p className="text-[25px] text-orange-500">{allData?.author?.name}</p>
                    <p className="text-[25px]">
                        {allData.content}
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}