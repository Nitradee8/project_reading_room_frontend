import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"
import ModalEditProduct from "./ModalEditProduct";

export default function AllProduct() {
    const [isOpen,setIsOpen] = useState(false)
    const [allProduct, setAllProduct] = useState([]);
    const [bookName,setBookName] = useState(null)
    const [description,setDescription] = useState(null)
    const [price,setPrice] = useState(null)
    const [bookId,setBookId] = useState(null)
    

    const handleCilckDelete = async (id) => {
        try {
            await axios.delete(`/product/delete/${id}`);
            axios.get('/product/allproduct').then((res) => setAllProduct(res.data.allProduct))
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = ()=>{
        axios.get('/product/allproduct').then((res) => setAllProduct(res.data.allProduct))
    }


    return (
        <div className="grid grid-cols-2 gap-6">
            {allProduct.map((el) => (
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
                                    <button className="bg-red-600 cursor-pointer rounded-lg w-52 p-2 text-center text-white" onClick={() => { handleCilckDelete(el.id) }} >Delete</button>
                                    <button onClick={()=> 
                                        {setIsOpen(true),setBookId(`${el.id}`) ,setBookName(`${el.bookname}`),setDescription(`${el.description}`),setPrice(`${el.price}`) }} className="bg-green-600 cursor-pointer rounded-lg w-52 p-2 text-center text-white">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} 
           
            <ModalEditProduct getProduct={getProduct} open={isOpen} bookName={bookName} bookId={bookId} description={description} price={price} setAllProduct={setAllProduct} allProduct={allProduct} setIsOpen={setIsOpen} />
        </div>
    )
}