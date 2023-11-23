import { Link } from "react-router-dom";

export default function NavBar2() {
    return (
        <>
            <div className="flex bg-amber-200 justify-between px-10 p-2 font-bold">
                <Link className="text-xl" to="EbookFreePage">นิยาย E-Book</Link>
                <div className="flex justify-end font-bold">
                    <Link className="text-xl" to="E-Book ฟรี">E-Book ฟรี</Link>
                </div>
                <div className="flex font-bold">
                    <Link className="text-xl" to="อดีต ปัจจุบัน อนาคต">อดีต ปัจจุบัน อนาคต</Link>
                </div>
                <div className="flex font-bold">
                    <Link className="text-xl" to="แฟนตาซี">แฟนตาซี</Link>
                </div>
                <div className="flex font-bold">
                    <Link className="text-xl" to="กำลังภายใน">จีนย้อนยุค</Link>
                </div>
            </div>
        </>
    )
}