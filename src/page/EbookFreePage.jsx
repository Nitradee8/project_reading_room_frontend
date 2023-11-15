import { Link } from "react-router-dom";

export default function EbookFreePage() {
    return (
        <div>
            <Link className="text-2xl underline md:underline-offset-4" to="E-Book ฟรี">E-Book ฟรี</Link>

            <div className="grid grid-cols-6 m-2">

                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/อัศวินดำโค่นอำนาจ.jpg"></img>
                    </div>
                    <div >
                        <Link className="text-xl underline md:underline-offset-4" to="อัศวินดำโค่นอำนาจเล่ม 1">อัศวินดำโค่นอำนาจเล่ม 1</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/อาจารย์เย็นชากับศิษย์ชั่วช้า.jpg"></img>
                    </div>
                    <div>
                        <Link className="text-xl underline md:underline-offset-4" to="อาจารย์เย็นชากับศิษย์ชั่วช้า">อาจารย์เย็นชากับศิษย์ชั่วช้า</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/สตรีน่าตาย.jpg"></img>
                    </div>
                    <div>
                        <Link className="text-xl underline md:underline-offset-4" to="สตรีน่าตาย">สตรีน่าตายเล่ม 1</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/อหังการยอดคนเหนือยุทธ.png"></img>
                    </div>
                    <div>
                        <Link className="text-xl underline md:underline-offset-4" to="อหังการยอดคนเหนือยุทธ">อหังการยอดคนเหนือยุทธเล่ม 31</Link>
                    </div>
                </div>
                
                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/สุสานเทพผนึกมาร.jpg"></img>
                    </div>
                    <div>
                        <Link className="text-xl underline md:underline-offset-4" to="สุสานเทพผนึกมาร">สุสานเทพผนึกมาร</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center w-30 h-60">
                    <div className="flex justify-start gap-10 rounded-2xl p-8">
                        <img src="/src/assets/ราชาแห่งศาสตร์เวท.jpg"></img>
                    </div>
                    <div>
                        <Link className="text-xl underline md:underline-offset-4" to="ราชาแห่งศาสตร์เวท">ราชาแห่งศาสตร์เวทเล่ม 2</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}