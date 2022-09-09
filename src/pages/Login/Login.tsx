import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../states/User/userState";

export const Login = () => {

  const navigate = useNavigate()
  const setUser = useSetRecoilState(userState);
  const [ email, setEmail ] = useState("test@gmail.com");
  const [ password, setPassword] = useState("123456")

  const handleLogin = () => {
    if( email === "test@gmail.com" && password === "123456"){
      setUser({
        name: "test",
        email: "test@mail.com"
      });
      navigate("/mypage")
    }
  }

  const handleNotLogin = () => {
    window.location.href = "/";
  }
  
  return (
    <>
      <div className="w-[400px] h-[400px] rounded-xl bg-primary300 mt-[400px] flex flex-col gap-[10px] items-center justify-center">
        <div className="flex flex-col items-end gap-[14px]">
          <div className="flex gap-[10px] items-center">
            <span>Email: </span>
            <input 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              className="w-[300px] h-[40px] rounded-lg"
              />
          </div>

          <div className="flex gap-[10px] items-center">
            <span>Password: </span>
            <input 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
              className="w-[300px] h-[40px] rounded-lg" type={"password"}
            />
          </div>
        </div>
        
        <div className="flex gap-[10px]">
          <button className="w-[100px] h-[30px] rounded-lg bg-secondary300 text-light"
            onClick={handleLogin}
          >Login</button>
          <button className="w-[200px] h-[30px] rounded-lg bg-red-300 text-light" 
            onClick={handleNotLogin}
          >Access Without Login</button>
        </div>
      </div>
    </>
  )
}