import { Link } from "react-router-dom";

export default function NavBar1() {
    return (
        <div className="flex bg-amber-300 justify-between px-5 p-2.5">

            <div className="flex-1">
                <a1 className="btn btn-ghost normal-case text-xl">Reading Room</a1>
            </div>

            <div className="flex gap-10 justify-end">
                <Link className="text-xl" to="ชั้นวางหนังสือ">ชั้นวางหนังสือ</Link>

                <div className="flex gap-4 bg-white">
                    <img src="/src/assets/search.png" className="flex border-box w-8 h-8"></img>
                    <div className="input-group grid justify-items-start">
                        <button className="btn btn-square"></button>
                        <input type="text" placeholder="ค้นหานิยาย…" className="input input-bordered" />
                    </div>
                </div>

                <div className="flex gap-2">
                    <img src="/src/assets/user.png" className="flex border-box w-7 h-7"></img>
                    <Link className="text-xl" to="Login">Login</Link>
                    
                </div>
            </div>
        </div>
    );
}