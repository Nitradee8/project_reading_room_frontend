// redirect หน้า login (เมื่อ User ทำการ login อยู่ ไม่ควรจะไปหน้า login ได้)
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook/use-auth";


export default function RedirectIfAuthentcated({children}) {
    const { authUser } = useAuth(); // ดึงข้อมูล user ที่ทำการ login อยู่ใน AuthContext (authUser)
    if (authUser) {
        return <Navigate to="/" />;
    }
    return children;
}