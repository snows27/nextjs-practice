import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'

const SingleEvents = ({ data }) => {
  const inputEmail = useRef()
  const router = useRouter();
  const [message, setMessage] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address')
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId })
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json();
      setMessage(data.message)
      inputEmail.current.value = '';
      alert('You have been registered successfully!')
      setMessage('')
    } catch (e) {
      console.log('ERROR', e);
    }

  };

  return (
    <div className="single_event">
      <div className="box">
        <h1>{data.title}</h1>
        <img src={data.image} width={500} height={500} alt={data.title} />
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className="email_registration" width={1000} height={500} alt={data.title}>
          <label>Get Registered for this event!</label>
          <input ref={inputEmail}
            type="email"
            id="email"
            placeholder="Please insert your email here" />
          <button type="submit">Submit</button>
        </form>
        <p className="invalidEmail">{message}</p>
      </div>
    </div>
  )
}

export default SingleEvents