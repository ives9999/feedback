import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item1.',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item2.',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item3.',
            rating: 8,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {
            text: 'Please rating it.',
            rating: 10,
        },
        canEdit: false,
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            canEdit: true
        })
    }

    // Update feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map( (item) => (item.id === id ? {...item, ...updItem} : item))
        )
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => (item.id !== id)))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext