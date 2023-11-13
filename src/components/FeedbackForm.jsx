import React from 'react'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')
    const [isDisable, setIsDisable] = useState(true)
    const [message, setMessage] = useState('')

    const handleText = (e) => {
        if (text === '') {
            setIsDisable(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setIsDisable(true)
        } else {
            setMessage(null)
            setIsDisable(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.length >= 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>    
            <RatingSelect select={(rating) => {setRating(rating)}} />
            <div className="input-group">
                <input 
                    type="text"
                    value={text} 
                    placeholder='Write a review' 
                    onChange={handleText}
                />
                <Button type="submit" version="primary" isDisable={isDisable}>
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>      
    </Card>
  )
}

export default FeedbackForm
