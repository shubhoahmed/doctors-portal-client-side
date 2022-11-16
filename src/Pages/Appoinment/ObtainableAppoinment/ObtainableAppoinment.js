import React, { useState } from 'react';
import { format } from 'date-fns';
import ObtainableSlot from './ObtainableSlot';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'

const ObtainableAppoinment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const { data: appoinmentSlot = [] } = useQuery({
        queryKey: ['appoinmentSlot'],
        queryFn: () => fetch(`http://localhost:5000/appoinmentSlot`)
            .then(res => res.json())
    })

    return (
        <section className='mt-10'>
            <p className='text-center font-bold text-secondary my-8'>Available Appointments on :{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    appoinmentSlot.map(slot => <ObtainableSlot
                        key={slot._id}
                        emptySlot={slot}
                        setTreatment={setTreatment}
                    />)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                />}
        </section>
    );
};

export default ObtainableAppoinment;