import React from 'react'

export default function EventsDisplay({event}) {
  return (
    <div className='events col-lg-3 col-md-2 col-sm-1'>
      <h2>{event.title}</h2>
      <p>{event.type}</p>
      <p>From: {event.start}</p>
      {event.end && <p>To: {event.end}</p>}

    </div>
  )
}
