import React from 'react';
import Card from '../Card/Card';


const Cards = ({ cards, handleToList }) => {
    return (
        <div className='container'>
            <h2 className='fs-4 text-center text-md-start pt-3'>Select today’s exercise</h2>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-md-4 g-2 my-1">
                {
                    cards.map(card => <Card
                        card={card}
                        handleToList={handleToList}
                        key={card.id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;