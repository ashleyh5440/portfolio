import { useState } from 'react';

const Carousel = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0);

    const goToPrev = () => {
        const newCard = (currentCard - 1 + cards.length) % cards.length;
        setCurrentCard(newCard)
    };

    const gotToNext = () => {
        const newCard = (currentCard + 1) % cards.length;
        setCurrentCard(newCard);
    };
};

return (

);

// return (
//     <div className="card-container">
//         <div className="card-content">
//             <div className="project-title"></div>
//             <div className="project-img"></div>
//             <div className="project-description"></div>
//         </div>
//     </div>
// )