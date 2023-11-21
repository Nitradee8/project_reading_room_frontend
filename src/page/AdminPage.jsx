import AdminAddButtonEbook from "../button/AdminAddEbook";
import AdminDeleteEbook from "../button/AdminDeleteEbook";

export default function AdminPage() {
  return (
    <>
      <div className="flex gap-6 justify-center items-center p-4">
        <AdminAddButtonEbook />
        <AdminDeleteEbook />
      </div>
    </>
  )
}
