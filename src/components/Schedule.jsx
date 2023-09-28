import EVENTS from '../eventInfo';
import './Schedule.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Schedule = () => {
  const eventDates = EVENTS.reduce((acc, cur) => {
    if (acc.findIndex((x) => x.date === cur.date) === -1) {
      acc.push({ date: cur.date, day: cur.day });
    }
    return acc;
  }, []);

  const createEvent = (event) => {
    return (
      <>
        {/* {event.needsRsvp ? (
          <h2 className="schedule-eventDate">{event.date}</h2>
        ) : null} */}
        <div className="schedule-eventDetailsAndDescription">
          <div className="schedule-eventDetails">
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
                    prev + cur + (index < event.address.length - 1 ? ', ' : '')
                  );
                }, '')}
                startDate={event.metaData[0]}
                endDate={event.metaData[1]}
                startTime={event.metaData[2]}
                endTime={event.metaData[3]}
                timeZone="America/Los_Angeles"
                debug="true"
                size="2"
                label="ADD TO CALENDAR"
                styleLight="
                  --font:var(--font-1);
                  --btn-background:var(--clr-white-2);
                  --btn-shadow: none;
                  --btn-border:var(--clr-pri);
                  --btn-text:var(--clr-pri);
                  --btn-text-hover:var(--clr-pri);
                  "
              ></AddToCalendarButton>
            </div>
          </div>
          <ul className="schedule-descriptionList">
            {event.title.toLowerCase() === 'wedding voyage' ? (
              <li className="schedule-eventDescription schedule-dressCode">
                Dress Code: {event.dressCode}
              </li>
            ) : (
              ''
            )}
            {event.description.map((x) => (
              <li className="schedule-eventDescription" key={x}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      {eventDates.map((date) => {
        return (
          <div key={'date' + date.date} className="schedule-dayWrapper">
            <div className="schedule-eventDate">{date.date}</div>
            <div className="schedule-eventDay">{date.day}</div>
            {EVENTS.map((event) => {
              if (event.date === date.date) {
                return (
                  <div
                    key={event.title + date.date}
                    className="schedule-eventWrapper"
                  >
                    {createEvent(event)}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
