import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/AuthProvider';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleSignUp = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    }
    return (
        <div className='h-[800px] flex justify-center items-center text-neutral'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center '>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Name</span></label>

                        <input type="text"  {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Email*</span></label>

                        <input type="email"  {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password*</span></label>

                        <input type="password"  {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full" />
                    </div>

                    <input className='btn w-full' type="submit" value='SignUp' />
                </form>
                <p className='my-2'>Already have an account? <Link to='/login'><span className='text-primary'>Please login</span></Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full bg-red-400'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;