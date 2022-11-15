
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center text-neutral'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl '>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Email*</span></label>

                        <input type="text" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

                        {errors.email && <span className='text-red-600'>This field is required</span>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password*</span></label>

                        <input type="password" {...register("password",
                            { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full" />

                        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    </div>

                    <label className="label"> <span className="label-text"> Forget Password? </span></label>

                    <input className='btn w-full' type="submit" value='Login' />
                </form>
                <p className='my-2'>New to Doctors Portal <Link to='signup'><span className='text-primary'>Create an Account</span></Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full bg-red-400'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;