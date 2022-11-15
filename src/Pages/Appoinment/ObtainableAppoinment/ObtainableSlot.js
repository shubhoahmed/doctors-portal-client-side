import React from 'react';

const ObtainableSlot = ({ setTreatment }) => {
    const { name, slots } = setTreatment;
    return (
        <div className="card text-primary-content">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold lg:text-center text-secondary">{name} </h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} obtainable</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-primary  text-white" onClick={() => setTreatment()}>Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default ObtainableSlot;