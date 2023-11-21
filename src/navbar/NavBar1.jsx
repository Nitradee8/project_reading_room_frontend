import { Link } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function NavBar1() {
    const { authUser, logout } = useAuth();
    const handleLogout = e => {
        e.preventDefault();
        logout()
    }

    return (
        <div className="flex bg-amber-300 justify-between px-5 p-2.5">

            <div className="flex-1">
                <a1 className="btn btn-ghost normal-case text-xl">Reading Room</a1>
            </div>

            <div className="flex gap-6 justify-end items-center">
                <Link className="text-xl" to="ชั้นวางหนังสือ">ชั้นวางหนังสือ</Link>

                <div className="flex gap-4 bg-white rounded-lg">
                    <div className="input-group flex justify-items-start">
                        <button className="btn btn-circle">
                            <img src="/src/assets/search.png" className="flex border-box w-8 h-8"></img>
                        </button>
                        <input type="text" placeholder="ค้นหานิยาย…" className="input input-bordered" />
                    </div>
                </div>

                <div className="flex gap-2">
                    <img src="/src/assets/user.png" className="flex border-box w-7 h-7"></img>
                    {authUser? <button onClick={(e) => handleLogout(e)}>Logout</button>:
                    <Link className="text-xl" to="Login">Login</Link>}

                </div>
            </div>
        </div>
    );
}