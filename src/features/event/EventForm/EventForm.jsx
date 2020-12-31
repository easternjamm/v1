import React, { Component } from "react";

class EventForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;
    return (
      <section className='event-form'>
        <form action='#'>
          <label htmlFor='e-title'>Event Title</label>
          <input type='text' name='e-title' placeholder='Title' />
          <label htmlFor='e-date'>Event Date</label>
          <input type='date' name='e-date' />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            placeholder='City where the event is taking place'
          />
          <label htmlFor='street'>Street</label>
          <input type='text' name='street' placeholder='Street name' />
          <label htmlFor='host'>Hosted by</label>
          <input type='text' name='host' placeholder='Name of the host' />
          <div className='form-submit'>
            <button>Submit</button>
            <button onClick={cancelFormOpen}>Cancel</button>
          </div>
        </form>
      </section>
    );
  }
}

export default EventForm;
