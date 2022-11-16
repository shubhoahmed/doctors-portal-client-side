import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appoinmentDate: date,
            treatment: name,
            patient: name,
            email,
            phone,
            slot
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                setTreatment(null);
                toast.success('Booking Confirmed')
            })



    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-neutral">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10 bg-white'>
                        <input type="text" disabled value={date} className="input w-full disabled:bg-gray-200" />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)

                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full disabled:bg-gray-200 " required />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full disabled:bg-gray-200 " required />
                        <input name='phone' type="text" placeholder="Your Number" className="input w-full " required />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-success text-white text-center w-full " />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;