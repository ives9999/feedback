import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)
    
    let average = feedback.reduce((accu, curr) => {
        return accu + curr.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')
    average = isNaN(average) ? 0 : average

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    )
}

export default FeedbackStats

