import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIfAdmin({children}) {
    const { authUser } = useAuth(); // ดึงข้อมูล user ที่ทำการ login อยู่ใน AuthContext (authUser)
    if (authUser.role === "ADMIN") {
        return <Navigate to="/admin" />;
    }
    return children;
}