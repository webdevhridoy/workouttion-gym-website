import './Card.css';

const Card = ({ card, handleToList }) => {
    const { name, age, times, img, description } = card;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} alt="images" class="card-img-top w-100 custom-img" />
                    <div class="card-body">
                        <h5 class="card-title fs-6 fw-bold">{name}</h5>
                        <p class="card-text">{description.slice(0, 40)}...</p>
                        <h6 class="card-title">For Age: {age}</h6>
                        <h6 class="card-title">Time required: {times}h</h6>
                        <div>
                            <button onClick={() => handleToList(card)} className='btn btn-primary d-block w-100'>Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;