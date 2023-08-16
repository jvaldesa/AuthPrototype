import { useState } from "react"
import {RiMailLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"



export const ForgetPassword = () => {

  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if([email].includes("")){
      toast.error("🤨 Todos los campos son obligatorios", {
        theme: "dark"
      })
      return
    }
    
    toast.success("👍 Se han enviado las instrucciones a tu email", {
      theme: 'dark'
    })
  }

  return (
    <div>
      <div className='bg-white p-8 rounded-lg w-full md:w-96'>
        <div className="mb-10">
          <h1 className='text-3xl uppercase font-bold text-center'>Recuperar Contraseña</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 transition-all ">
              Enviar Instrucciones
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <div className="text-left">
            ¿Ya tienes una cuenta?{" "}
            <Link className="text-sky-600 font-medium hover:underline transition-all" to="/"> Ingresa</Link>
          </div>
          <div className="text-right">
            ¿No tienes una cuenta?{" "}
            <Link className="text-sky-600 font-medium hover:underline transition-all" to="/registro"> Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  )

}
