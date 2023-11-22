import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "../auth/RegisterFrom";

export default function RegisterContainer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <button 
                className="bg-green-500 text-white rounded-md px-10 py-3 font-bold"
                onClick={() => setIsOpen(true)}
                >
                สมัครสมาชิก
            </button>
                <Modal title="สมัครสมาชิกเพื่อใช้บริการ" open={isOpen} onClose={() => setIsOpen(false)}>
                    <RegisterForm />
                </Modal >
        </div>
    );
}