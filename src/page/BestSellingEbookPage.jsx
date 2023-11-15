import { Link } from "react-router-dom"

export default function BestSellingEbookPage() {
    return (
        <div>
            <br />
            <Link className="text-2xl underline md:underline-offset-4" to="อีบุ๊กขายดีประจำสัปดาห์">อีบุ๊กขายดีประจำสัปดาห์</Link>

            <div className="grid grid-cols-2 p-5 space-x-5">
                <div className="flex justify-start gap-7 bg-amber-200 rounded-2xl p-5">
                        <img className="flex border-box h-auto" src="/src/assets/ขนเสบียง1.jpg"></img>
                    <div className="text-col">
                        <Link className="text-base underline md:underline-offset-4" to="ขนเสบียงนับล้าน มาเป็นมาร(ดา)ของเหล่าวายร้าย เล่ม 1">ขนเสบียงนับล้าน มาเป็นมาร(ดา)ของเหล่าวายร้าย เล่ม 1</Link>
                        <br />
                        <br />
                        <Link className="text-sm text-orange-500" to="อดีต ปัจจุบัน อนาคต">อดีต ปัจจุบัน อนาคต</Link>
                        <br />
                        <br />
                        <Link className="text-sm text-orange-500" to="Xianaan">Xianaan</Link>
                        <br />
                        <br />
                        <p className="text-sm">หูเจียวเจียวทะลุมิติไปเป็นนางร้ายในนิยายที่เพิ่งอ่านไม่นานมานี้ แถมไม่พอนางยังมีจุดจบที่น่าอนาถสุดๆ อีกด้วย! แล้วแบบนี้หญิงสาวจะสามารถรับมือกับลูกที่เกลียดเธอรวมถึงเปลี่ยนชะตาชีวิตของตัวเองได้หรือไม่!?</p>
                        <br />
                        <br />
                        <Link to="/bestSelling/:bestSellingId/payment">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                $ 9.00
                            </button>
                        </Link>

                    </div>
                    <hr />
                </div>
                <div className="flex justify-start gap-7 bg-amber-200 rounded-2xl p-5">
                    <img className="flex border-box" src="/src/assets/ขนเสบียง2.jpg" ></img>
                    <div className="text-col">
                        <Link className="text-base underline md:underline-offset-4" to="ขนเสบียงนับล้าน มาเป็นมาร(ดา)ของเหล่าวายร้าย เล่ม 2">ขนเสบียงนับล้าน มาเป็นมาร(ดา)ของเหล่าวายร้าย เล่ม 2</Link>
                        <br />
                        <br />
                        <Link className="text-sm text-orange-500" to="อดีต ปัจจุบัน อนาคต">อดีต ปัจจุบัน อนาคต</Link>
                        <br />
                        <br />
                        <Link className="text-sm text-orange-500" to="Xianaan">Xianaan</Link>
                        <br />
                        <br />
                        <p className="text-sm">เจ้าจอมวายร้ายสุดโหดในนิยายกลับมาอาศัยอยู่ที่บ้านแล้ว หูเจียวเจียวจะสามารถอยู่ร่วมชายคาเดียวกับเขาได้หรือเปล่า?
                            เอ๊ะ! เขาพาผู้หญิงที่ไหนกลับมาน่ะ? นั่นมันนางร้ายที่ทำให้นางเอกของนิยายประสบภัยร้ายมากมายไม่ใช่เหรอ?
                            ขณะเดียวกัน ในเผ่าก็เกิดเรื่องใหญ่ขึ้น!หูเจียวเจียวจะช่วยให้เผ่าผ่านอุปสรรคเหล่านี้ไปได้ไหมนะ?</p>
                        <br />
                        <br />
                        <Link to="/bestSelling/:bestSellingId/payment">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                $ 29.00
                            </button>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}