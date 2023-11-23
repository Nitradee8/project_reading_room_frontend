// redirect หน้า login (เมื่อ User ทำการ login อยู่ ไม่ควรจะไปหน้า login ได้)
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIfAuthentcated({children}) {
    const { authUser } = useAuth(); // ดึงข้อมูล user ที่ทำการ login อยู่ใน AuthContext (authUser)
    if (authUser?.role === "ADMIN") {
        return <Navigate to="/admin" />;
    } 
    
    else if (authUser?.role === "USER") {
        return <Navigate to="/" />;
    }
    // console.log(authUser)
    return children;
}