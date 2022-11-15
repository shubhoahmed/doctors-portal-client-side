import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import ObtainableAppoinment from '../ObtainableAppoinment/ObtainableAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}

            />
            <ObtainableAppoinment
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default Appoinment;