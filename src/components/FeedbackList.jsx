import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedback, deleteFeedback }) {

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet!</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map( (item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <FeedbackItem 
                            item={item} 
                            handleDelete={deleteFeedback}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>


            {/* {feedback.map( (item) => (
                <FeedbackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete={deleteFeedback}
                />
            ))} */}
        </div>
    )
}

FeedbackList.protoTypes = {
    item: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList
