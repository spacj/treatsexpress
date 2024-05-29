import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faHospital } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons'; // Import the desired FontAwesome icon
import ReactCardCarousel from 'react-card-carousel';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleCardClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  const cardItems = [
    {
      id: 1,
      title: 'Temperature Controlled',
      text: 'Whether you\'re craving the best pizza or sushi in the world, we\'ll go to pick it and bring it to you at the perfect temperature to be consumed in few hours.',
      icon: faSnowflake, // Use the imported FontAwesome icon here
    },
    {
      id: 2,
      title: 'Priority Now',
      text: 'This is the text for Card 2',
      icon: faClock, // Use the same or different FontAwesome icon for each card
    },
    {
      id: 3,
      title: 'Fragile Pieces',
      text: 'This is the text for Card 3',
      icon: faWineBottle,
    },
    {
      id: 4,
      title: 'Discreet Transport',
      text: 'This is the text for Card 4',
      icon: faLocationPinLock, // Use the imported FontAwesome icon here
    },
    {
      id: 5,
      title: 'Pharma Emergency',
      text: 'Whether your medical emergency is we can deliver you what you need way faster than anyone else as we\'re able to start a mission within few minutes and to make burocracy faster',
      icon: faHospital, // Use the same or different FontAwesome icon for each card
    },
    {
      id: 6,
      title: 'Remote, Rural and Dangerous',
      text: 'Let us go wherever you don\'t want to go to, we can deliver your parcels in the most difficult to access areas in the world in a very short time. Just give us an address!',
      icon: faUserNinja,
    },
    // Add more cards here...
  ];

  return (
    <div>
      <div className="relative mt-[25vh] mb-[25vh]" style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactCardCarousel>
          {cardItems.map((card, idx) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(idx)}
              style={{
                background: idx === index ? '#FFF' : '#FFF',
                color: idx === index ? '#000' : '#706d70',
                fontSize: '12px',
                borderRadius: '10px',
              }}
              className="flex flex-col justify-start h-[42vh] w-[200px] border border-[#f0f0f0]"
            >
               <div className="h-[5vh] flex justify-center items-center font-bold"><h2 className="pt-9 text-[12pt] text-center" style={{textTransform: "uppercase"}}>{card.title}</h2></div>
               <div className="h-[15vh] flex justify-center items-center pt-4"><FontAwesomeIcon icon={card.icon} size="5x" style={{color: "#D4AF37",}}/> {/* Display the FontAwesome icon */}</div>
               <div className="h-[22vh] px-6 pt-2 text-center text-[#545254]"><p>{card.text}</p></div>
            </div>
          ))}
        </ReactCardCarousel>
      </div>
    </div>
  );
};

export default Carousel;
