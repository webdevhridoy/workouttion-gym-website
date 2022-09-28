import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {
    const [list, setList] = useState([]);

    const handleToList = (gym) => {
        const newList = [...list, gym];
        setList(newList);
    };

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div className='container home-container'>
            <div className="row">
                <div className='col-12 col-md-8 text-start'>
                    <Cards cards={cards} handleToList={handleToList}></Cards>
                </div>
                <div className='col-md-4 col-12'>
                    <Cart list={list}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;