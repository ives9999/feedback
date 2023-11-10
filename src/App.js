import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData)
    return (
        <>
        <Header />
        <div className='container'>
            <FeedbackList feedback = {feedbackData} />
        </div>
        </>
    );
}

export default App;
