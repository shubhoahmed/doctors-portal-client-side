import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Exception = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold text-neutral">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-neutral">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl lg:mr-3" alt='' />
            </div>
        </div>

    );
};

export default Exception;