import React, { Component } from "react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className='event-list-item'>
        <div className='el-header'>
          <div className='el-profile-picture'>
            <img src={event.hostPhotoURL} alt='' />
          </div>
          <div className='el-title'>
            <h2>{event.title}</h2>
            <p>
              Hosted by <a href='#'>{event.hostedBy}</a>{" "}
            </p>
          </div>
        </div>
        <div className='el-time'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z' />
            </svg>
            {event.date} |
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
            </svg>
            {event.venue}
          </span>
        </div>
        <div className='el-attendees'>
          {event.attendees &&
            event.attendees.map((attendee) => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
        </div>
        <div className='el-footer'>
          <span>{event.description}</span>
          <button>View</button>
        </div>
      </div>
    );
  }
}

export default EventListItem;
