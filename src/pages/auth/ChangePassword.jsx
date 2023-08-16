import { useState } from "react"
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiMailLine } from "react-icons/ri"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
 

export const ChangePassword = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const {token} = useParams()

  console.log(token);
  if(token !== "14654613365"){
    navigate("/")
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if([password, confirmPassword].includes("")){
      toast.error("🤨 Todos los campos son obligatorios", {
        theme: "dark"
      })
      return
    }
    if(password.length<6){
      toast.error("🤨 El password debe tener cuando menos 6 caracteres", {
        theme: "dark"
      })
      return
    }

    if(password !== confirmPassword){
      toast.error("😕 Los passwords son diferentes", {
        theme: "dark"
      })
      return
    }
    
    toast.success("✔ Tu contraseña se ha actualizado", {
      theme: "dark"
    })
  }

  return (
    <div>
      <div className='bg-white p-8 rounded-lg w-full md:w-96'>
        <div className="mb-10">
          <h1 className='text-3xl uppercase font-bold text-center'>Iniciar sesión</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword? "text": "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Contraseña"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {showPassword? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              ):(
                <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              )}
            
          </div>
          <div className="relative">
            <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword? "text": "password"}
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Confime Contraseña"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            {showPassword? (
                <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              ):(
                <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
              )}
            
          </div>
         
          <div>
            <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all ">
              Ingresar
            </button>
          </div>
        </form>
        
      </div>
    </div>
  )
}
