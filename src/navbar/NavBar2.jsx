

export default function NavBar2() {
    return (
        <>
            <div className="flex bg-amber-200 justify-between px-10 p-2 font-bold">
                <div className="text-xl" to="EbookFreePage">นิยาย E-Book</div>
                <div className="flex justify-end font-bold">
                    <div className="text-xl" to="E-Book ฟรี">E-Book ฟรี</div>
                </div>
                <div className="flex font-bold">
                    <div className="text-xl" to="อดีต ปัจจุบัน อนาคต">อดีต ปัจจุบัน อนาคต</div>
                </div>
                <div className="flex font-bold">
                    <div className="text-xl" to="แฟนตาซี">แฟนตาซี</div>
                </div>
                <div className="flex font-bold">
                    <div className="text-xl" to="กำลังภายใน">จีนย้อนยุค</div>
                </div>
            </div>
        </>
    )
}