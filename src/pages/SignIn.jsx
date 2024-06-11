import { login } from '../account/signUpAccount';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import logo from "../assets/logo.svg"

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();

function SignIn() {
    const location = useLocation()
    const navigate = useNavigate()

    const {register, setValue, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)})

    useEffect(() => {
        if (location.state) {
            const {username, password} = location.state
            setValue('username', username)
            setValue('password', password)
            
        }
    }, [])

    const mutation = useMutation({
        mutationFn: (data) => login(data),
        onSuccess: (data, variables, context) => {
            localStorage.setItem('token', data.token)
            navigate('/member/')
        },
        onError: (error) => {
            console.log(error);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    return (
        <>
            
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="logo de l'application"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {mutation.isError && <p className="text-white p-2 bg-danger-500 mb-4 text-center">Les informations sont invalides !</p> }
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                   {...register('username')}
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <p className="text-red-700">{errors.username?.message}</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/*
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    {...register('password')}
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <p className="text-red-700">{errors.password?.message}</p>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex gap-3 w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={mutation.isPending}
                            >
                                Sign in
                                {mutation.isPending && <Spinner />}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not account?{' '}
                        <Link to="/sign_up/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignIn