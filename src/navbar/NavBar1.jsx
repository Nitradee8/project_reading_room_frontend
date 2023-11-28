import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";


export default function NavBar1() {
    const { authUser, logout } = useAuth();
    const handleLogout = e => {
        e.preventDefault();
        logout()
    }

    const navigate = useNavigate();

    const readingRoom = () => {
        navigate("/")
    }

    return (
        <div className="flex bg-amber-300 justify-between px-5 p-2.5">
            <div className="flex">
                <h1 className="btn btn-ghost normal-case text-xl" onClick={readingRoom}>Reading Room</h1>

            </div>

            <div className="flex gap-4 justify-end items-center">
                <img src="/src/assets/Bookshelf.png"className="w-12" />
                <Link className="text-xl font-bold" to="BookshelfPage">ชั้นวางหนังสือ</Link>

                <div className="flex gap-4 bg-white rounded-lg">
                    <div className="input-group flex justify-items-start">
                        <button className="btn btn-circle">
                            <img src="/src/assets/search.png" className="flex border-box w-8 h-8"></img>
                        </button>
                        <input type="text" placeholder="ค้นหานิยาย…" className="input input-bordered" />
                    </div>
                </div>

                <div className="flex gap-2 font-bold">
                    <img src="/src/assets/user.png" className="flex border-box w-7 h-7 "></img>
                    {authUser? <button onClick={(e) => handleLogout(e)}>Logout</button>:
                    <Link className="text-xl" to="Login">Login</Link>}
                </div>
            </div>
        </div>
    );
}