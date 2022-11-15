import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ObtainableSlot from './ObtainableSlot';
import BookingModal from '../BookingModal/BookingModal';

const ObtainableAppoinment = ({ selectedDate }) => {
    const [appoinmentSlot, setAppoinmentSlot] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch(`appoinmentSlot.json`)
            .then(res => res.json())
            .then(data => setAppoinmentSlot(data));
    }, [])
    return (
        <section className='mt-10'>
            <p className='text-center font-bold text-secondary my-8'>Available Appointments on :{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    appoinmentSlot.map(slot => <ObtainableSlot
                        key={slot._id}
                        slot={slot}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            <BookingModal></BookingModal>
        </section>
    );
};

export default ObtainableAppoinment;