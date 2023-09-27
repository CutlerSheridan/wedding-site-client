import EVENTS from '../eventInfo';
import './Schedule.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Schedule = () => {
  const eventDates = EVENTS.reduce((acc, cur) => {
    if (!acc.includes(cur.date)) {
      acc.push(cur.date);
    }
    return acc;
  }, []);

  const createEvent = (event) => {
    return (
      <div className="schedule-eventWrapper" key={event.title}>
        {/* {event.needsRsvp ? (
          <h2 className="schedule-eventDate">{event.date}</h2>
        ) : null} */}
        <h3 className="schedule-eventTitle">{event.title}</h3>
        <div className="schedule-eventDetails">
          <p>
            {event.day} ~{' '}
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
                  prev + cur + (index < event.address.length - 1 ? ', ' : '')
                );
              }, '')}
              // location="Los Angeles"
              startDate={event.metaData[0]}
              endDate={event.metaData[1]}
              startTime={event.metaData[2]}
              endTime={event.metaData[3]}
              timeZone="America/Los_Angeles"
              debug="true"
              // buttonStyle="flat"
              // lightMode="dark"
              styleLight="--btn-shadow:none; --btn-background:var(--clr-grey); --btn-text:var(--clr-white-2); --font:var(--font-1)"
              // styleDark="--btn-shadow:transparent; --btn-border:none --btn-background:var(--clr-grey)"
            ></AddToCalendarButton>
          </div>
        </div>
        <ul>
          {event.description.map((x) => (
            <li className="schedule-eventDescription" key={x}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div>
      <h1>Itinerary</h1>
      {eventDates.map((date) => {
        return (
          <div key={'date' + date} className="schedule-dayWrapper">
            <div className="schedule-eventDate">{date}</div>
            {EVENTS.map((event) => {
              if (event.date === date) {
                return <div key={event.name + date}>{createEvent(event)}</div>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
