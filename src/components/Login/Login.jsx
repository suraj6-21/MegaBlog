import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../../Store/AuthSlice'
import Logo from '../Logo'
import Input from '../Input'
import Button from "../Button";
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../../appwrite/Auth'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const logins = async (data, { onLoginSuccess }) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    onLoginSuccess()
                    navigate("/")
                }
            }
        } catch (error) {
            console.error("Login error:", error)
            setError(error.massage)

        }
    }
    return (
        <div className='w-full flex items-center justify-center' >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium cursor-pointer text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(logins)} className='mt-8'>
                    <div className="space-y-5">
                        <Input
                            label=" Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true, validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Invalid email format"
                                }
                            })}
                            className="w-full"
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 6,
                                    massage: "Password must be at least 6 characters long"
                                }
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login