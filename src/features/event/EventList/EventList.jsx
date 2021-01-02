import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <section>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </section>
    );
  }
}

export default EventList;
