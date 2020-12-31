import React, { Component } from "react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <div className='attendee'>
        <img src={attendee.photoURL} alt='' />
      </div>
    );
  }
}

export default EventListAttendee;
