import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, reviews } = review;
    return (
        <div className="card  bg-base-100 shadow-xl text-neutral">
            <div className="card-body px-4">
                <p>{reviews}</p>
                <div className='flex mt-5 justify-start items-center'>
                    <div className='mr-2'>
                        <img className='w-10' src={img} alt="" />
                    </div>
                    <div>
                        <h4 className="card-title">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;