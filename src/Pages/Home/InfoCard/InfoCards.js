import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9am to 5pm everyday',
            icon: clock,
            bgClass: 'primary'
        },
        {
            id: 2,
            name: 'Visit Ours Location',
            description: 'Open 9am to 5pm everyday',
            icon: marker,
            bgClass: 'neutral'
        },
        {
            id: 3,
            name: 'Contacts us now',
            description: 'Open 9am to 5pm everyday',
            icon: phone,
            bgClass: 'secondary'
        },
    ]
    return (
        <div>
            {
                cardData.map(card => <InfoCard

                    key={card.id}
                    card={card}


                />)
            }
        </div>
    );
};

export default InfoCards;