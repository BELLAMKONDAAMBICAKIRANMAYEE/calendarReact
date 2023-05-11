import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends React.Component {
  state = {
    events: [
      {
        title: 'Event 1',
        start: new Date(2023, 4, 10, 10, 0),
        end: new Date(2023, 4, 10, 12, 0),
      },
      {
        title: 'Event 2',
        start: new Date(2023, 4, 12, 14, 0),
        end: new Date(2023, 4, 12, 16, 0),
      },
    ],
  };

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default App;
