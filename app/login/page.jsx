"use client"
import Button from "@/components/ui/button"
import { useAuth } from "@/utils/AuthContext"
import Link from "next/link"
import { useState  } from "react"
import { useForm } from "react-hook-form"

const LoginPage = () => {
    const { register, handleSubmit } = useForm()
    const {loginUser} = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    const handleInputTypeChange = (e) => {
        setShowPassword(!showPassword)
    }

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        
        const userInfo = {email, password}
        loginUser(userInfo)
    }
  return (
    <div className='flex justify-center w-full items-center h-screen bg-white overflow-hidden'>
        <div className="w-full md:w-1/2 flex flex-col  items-center justify-center h-screen gap-14 md:gap-20">
            <div className="flex flex-col w-[300px] md:w-[400px] justify-center items-start">
                <h1 className="font-bold md:text-[2rem] mb-2 ">Welcome Back!</h1>
                <p className="md:font-medium text-[1rem]">Enter you're info to access your account.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[300px] md:w-[400px] justify-center items- gap-8 relative ">
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
                <Button variant='secondary' type='submit'>Login</Button>
                <Link href={"/forgot-password"} type='button' className="absolute text-[#0C2A92] top-[100px] right-0 hover:underline">Forgot password?</Link>
                <div className="flex gap-1 justify-center items-center">
                    <hr className="w-[100px] h-[1px] text-[#F5F5F5]"/>
                    Or 
                    <hr className="w-[100px] h-[1px] text-[#F5F5F5]"/>
                </div>
            </form>
            <div className="flex flex-col justify-center items-center space-y-5 w-[300px] md:w-[400px]">
                <div>
                    <div className="flex flex-col sm:flex-row  gap-6">
                        <Button variant="outline" className="rounded-xl">
                            <img src="/google.svg" className="w-6 h-6 mr-2" alt="google login" />
                            Login with Google
                        </Button>
                        <Button variant="outline"  className="rounded-xl">
                            <img src="/apple.svg" className="w-6 h-6 mr-2" alt="apple login" />
                            Login with Apple
                        </Button>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="font-medium">Don’t have an account?  <Link href={"/register"} className="text-[#0F3DDE] hover:underline">Sign Up</Link></p>
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

export default LoginPage
