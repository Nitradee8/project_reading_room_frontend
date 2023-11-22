import LoginFrom from "../features/auth/LoginFrom";
import RegisterContainer from "../features/auth/RegisterConainer";


export default function LoginPage() {
    return (
      <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center w-screen">
        <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
          <div className="mx-auto max-w-[24.75rem] bg-sky-900 rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
            <p className="text-gray-200 text-xl font-bold text-center">เป็นสมาชิกอยู่แล้ว</p>
            <LoginFrom />
            <hr className="border-gray-300 my-4" />
            <RegisterContainer />
          </div>
        </div>
      </div>
    );
}