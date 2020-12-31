import React, { Component } from "react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    street: "",
    hostedBy: "",
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state);
  };
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, street, hostedBy } = this.state;
    return (
      <section className='event-form'>
        <form onSubmit={this.handleFormSubmit} autoComplete='off' action='#'>
          <label htmlFor={title}>Event Title</label>
          <input
            name='title'
            onChange={this.handleInputChange}
            value={title}
            type='text'
            placeholder='Title'
          />
          <label htmlFor='date'>Event Date</label>
          <input
            name='date'
            onChange={this.handleInputChange}
            value={date}
            type='date'
            placeholder='Event Date'
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            onChange={this.handleInputChange}
            value={city}
            placeholder='City where the event is taking place'
          />
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            onChange={this.handleInputChange}
            value={street}
            name='street'
            placeholder='Street name'
          />
          <label htmlFor='host'>Hosted by</label>
          <input
            type='text'
            onChange={this.handleInputChange}
            value={hostedBy}
            name='hostedBy'
            placeholder='Name of the host'
          />
          <div className='form-submit'>
            <button type='submit'>Submit</button>
            <button onClick={cancelFormOpen}>Cancel</button>
          </div>
        </form>
      </section>
    );
  }
}

export default EventForm;
