import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
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

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats

