import EVENTS from '../eventInfo';
import './Schedule.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Schedule = () => {
  return (
    <div>
      <h1>Itinerary</h1>
      {EVENTS.map((event) => {
        return (
          <div className="schedule-eventWrapper" key={event.title}>
            {event.needsRsvp ? (
              <h2 className="schedule-eventDate">{event.date}</h2>
            ) : null}
            <div>
              <h3 className="schedule-eventTitle">{event.title}</h3>
              <p>
                {event.time.includes('#')
                  ? event.time.replace('#', '')
                  : event.time}
              </p>
              {event.address.map((x) => (
                <p className="schedule-addressLine" key={x}>
                  {x}
                </p>
              ))}
              <div className="schedule-calendarButtonWrapper">
                {/* For more cal btn configs, go here:  https://add-to-calendar-button.com/configuration#style-parameters */}
                <AddToCalendarButton
                  name={
                    event.title.toLowerCase().includes('wedding')
                      ? "Cutler and Tyler's Wedding!"
                      : event.title
                  }
                  options={['Apple', 'Google', 'Outlook.com']}
                  location={event.address.reduce((prev, cur, index) => {
                    return (
                      prev +
                      cur +
                      (index < event.address.length - 1 ? ', ' : '')
                    );
                  }, '')}
                  // location="Los Angeles"
                  startDate={event.metaData[0]}
                  endDate={event.metaData[1]}
                  startTime={event.metaData[2]}
                  endTime={event.metaData[3]}
                  timeZone="America/Los_Angeles"
                  debug="true"
                ></AddToCalendarButton>
              </div>
              <ul>
                {event.description.map((x) => (
                  <li className="schedule-eventDescription" key={x}>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
