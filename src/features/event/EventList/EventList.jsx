import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <section>
        {this.props.events.map((event) => (
          <EventListItem key={event.id} event={event} />
        ))}
      </section>
    );
  }
}

export default EventList;
