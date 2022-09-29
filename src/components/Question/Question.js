import Accordion from 'react-bootstrap/Accordion';
import './Question.css';

const Question = () => {
    return (
        <div className='container py-5 questions' data-aos="fade-right"
            data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1 className='pb-3 fs-3 fw-bolder'>Question and Answer</h1>
            <Accordion className='question-answer' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How does react works?</Accordion.Header>
                    <Accordion.Body>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It's a library not a framework that creates user interfaces(UI). Also React is component based and hook based as well like useState, useEffect.The main concept of React. js is virtual DOM.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the differences between props and state?</Accordion.Header>
                    <Accordion.Body>
                        Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the use of useState useEffect hook?</Accordion.Header>
                    <Accordion.Body>
                        Updating the DOM, fetching data from an API endpoint, setting up subscriptions or timers, live filtering, validating input field.

                        The useEffect hook performs side effects in functional components. It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount. These three life-cycle methods can be handled by the useEffect hooks.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Question;