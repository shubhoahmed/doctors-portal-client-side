import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png';
import person2 from '../../../assets/images/people2.png';
import person3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Julfia kyln',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Umaira Babe',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person3,
            location: 'California'
        },
    ]
    return (
        <section className='my-16 px-8'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-semibold'>Testomonial</h4>
                    <h2 className='text-neutral lg:text-2xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;