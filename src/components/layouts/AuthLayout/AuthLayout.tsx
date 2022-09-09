import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '../../../states/User/userState';

export const AuthLayout = () => {
  
  const navigate = useNavigate()
  const user = useRecoilValue(userState);

  if(user.name !== ""){
    navigate("/")
  }

  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-start">
        <Outlet/>
      </div>
    </>
  )
}