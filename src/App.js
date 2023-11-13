import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData)
    const newFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbackData([newFeedback, ...feedbackData])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedbackData(feedbackData.filter((item) => (item.id !== id)))
        }
    }
    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm handleAdd={newFeedback} />
                        <FeedbackStats feedback={feedbackData} />
                        <FeedbackList 
                            feedback = {feedbackData} 
                            deleteFeedback = {deleteFeedback}
                        />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;
