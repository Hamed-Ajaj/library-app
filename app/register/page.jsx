"use client"
import Button from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useAuth } from "@/utils/AuthContext"


const RegisterPage = () => {
    const {registerUser} = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    const handleInputTypeChange = (e) => {
        setShowPassword(!showPassword)
    }

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const email = data.email
        const password = data.password
        
        const userInfo = {name, email, password}
        registerUser(userInfo)
      }
  return (
    <div className='flex justify-center p-12 sm:p-0 w-full items-center h-screen bg-white overflow-hidden'>
        <div className="w-full md:w-1/2 flex flex-col  items-center justify-center h-screen gap-8 md:gap-10">
            <div className="flex flex-col w-full sm:w-[300px] md:w-[400px] justify-center items-start">
                <h1 className="font-bold md:text-[2rem] ">Get Started Now</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full sm:w-[300px] md:w-[400px] justify-center items- gap-8 relative ">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-[1rem] font-semibold ">FullName</label>
                    <input 
                    type="text" 
                    placeholder="FullName" 
                    id="name" 
                    {...register("name", { required: true, maxLength: 20 })} 
                    className='border w-full border-[#D9D9D9] p-3  rounded-xl'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-[1rem] font-semibold ">Email address</label>
                    <input 
                    type="text" 
                    placeholder="email" 
                    id="email" 
                    {...register("email", { required: true, maxLength: 50 })} 
                    className='border w-full border-[#D9D9D9] p-3  rounded-xl'/>
                </div>
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="email" className="text-[1rem] font-semibold ">Password</label>
                    <input 
                    type={
                        showPassword ? "text" : "password"
                    }
                    placeholder="password" 
                    {...register("password", { required: true, maxLength: 36 })}
                    className='border border-[#D9D9D9] p-3 rounded-xl'/>
                    <div className="absolute right-2 top-[45px] cursor-pointer" >
                        <img src="/eye.svg" alt="eye" className="w-5 h-5" onClick={handleInputTypeChange}/>
                    </div>
                </div>
                <Button variant='secondary' type='submit'>Sign up </Button>
                <div className="flex gap-1 justify-center items-center">
                    <hr className="w-[100px] h-[1px] text-[#F5F5F5]"/>
                    Or 
                    <hr className="w-[100px] h-[1px] text-[#F5F5F5]"/>
                </div>
            </form>
            <div className="flex flex-col justify-center items-center space-y-5 w-full sm:w-[300px] md:w-[400px]">
                <div>
                    <div className="flex flex-col sm:flex-row  gap-6">
                        <Button variant="outline" className="rounded-xl">
                            <img src="/google.svg" className="w-6 h-6 mr-2" alt="google login" />
                            Sign up with Google
                        </Button>
                        <Button variant="outline"  className="rounded-xl">
                            <img src="/apple.svg" className="w-6 h-6 mr-2" alt="apple login" />
                            Sign up with Apple
                        </Button>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="font-medium">Have an account?  <Link href={"/login"} className="text-[#0F3DDE] hover:underline">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden w-1/2 lg:block "> 
            <img src="/books.jpg" alt="login" className="w-full h-full object-cover rounded-l-2xl"/>
        </div>
    </div>
  )
}

export default RegisterPage
