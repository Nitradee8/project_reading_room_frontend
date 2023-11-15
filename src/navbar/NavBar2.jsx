import { Link } from "react-router-dom";

export default function NavBar2() {
    return (
        <>
            <div className="flex bg-amber-200 justify-between px-10 p-2.5">
                <Link className="text-xl" to="EbookFreePage">นิยาย E-Book</Link>
                <div className="flex justify-end">
                    <Link className="text-xl" to="E-Book ฟรี">E-Book ฟรี</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-xl" to="อดีต ปัจจุบัน อนาคต">อดีต ปัจจุบัน อนาคต</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-xl" to="แฟนตาซี">แฟนตาซี</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-xl" to="จีนย้อนยุค">จีนย้อนยุค</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-xl" to="รักหวานแหวว">รักหวานแหวว</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-xl" to="กำลังภายใน">กำลังภายใน</Link>
                </div>
            </div>
        </>
    )
}