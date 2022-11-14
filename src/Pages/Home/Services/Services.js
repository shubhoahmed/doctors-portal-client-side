import React from 'react';
import serviceImg1 from '../../../assets/images/cavity.png'
import serviceImg2 from '../../../assets/images/fluoride.png'
import serviceImg3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceInfo = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            img: serviceImg2,
            description: 'Fluoride is a mineral that occurs naturally and is released from rocks into the soil, water, and air. Almost all water contains some fluoride.'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            img: serviceImg1,
            description: 'A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth.'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            img: serviceImg3,
            description: 'Teeth whitening refers to a variety of processes that aim to make someone’s natural teeth appear brighter and whiter. Teeth whitening methods.'
        },
    ]
    return (

        <div>
            <div className='text-center mt-12'>
                <h2 className='text-primary font-semibold uppercase'>Our Services</h2>
                <h2 className='text-neutral text-2xl my-2'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceInfo.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;