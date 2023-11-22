import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/use-auth";


export default function LoginForm() {
    const [input, setInput] = useState({
      email: '',
      password: ''
    });
  
    const { login } = useAuth();
  
    const handleSubmitForm = e => {
      console.log(input)
      e.preventDefault();
      login(input).catch(err => {
        toast.error(err.response.data.message);
      }
      );
    };


    return (
            <form className="grid gap-10" onSubmit={(e)=>handleSubmitForm(e)}>
              <hr />
              <LoginInput
                placeholder="email"
                value={input.email}
                onChange={e => setInput({ ...input, email: e.target.value })}
              />
              <LoginInput
                type="password"
                placeholder="password"
                value={input.password}
                onChange={e => setInput({ ...input, password: e.target.value })}
              />
              <LoginButton />
            </form>
    );
}