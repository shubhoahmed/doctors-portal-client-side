import React from 'react';
import bg from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='my-10' >
            <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email address" className="input input-bordered" />
                        </div>
                        <div className="form-control my-2">

                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <textarea className='rounded-md' name="" id="" cols="30" rows="5" placeholder='Your Massage'>

                        </textarea>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;