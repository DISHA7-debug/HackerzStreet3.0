import React from 'react';
import PropTypes from 'prop-types';
import './SchedulePage.css';

export default function Schedule() {
  const scheduleData = {
    round1: {
      date: { day: '12', month: 'April' },
      events: [
        { time: '11:00 AM', description: 'Problem statements are released at the website and the hackathon begins.' },
        { time: '12:00 PM', description: 'Participants are provided with refreshments.' },
        { time: '3:00 PM', description: 'Mentorship round 1 begins.' }
      ],
      eventsReverse: [
        { time: '6:00 PM', description: 'Mentorship round 2 begins.' },
        { time: '10:00 PM', description: 'Round 1 officially ends and the submission link is closed.' },
        { time: '12:00 AM', description: 'Round 1 results are announced.' }
      ]
    },
    round2: {
      date: { day: '13', month: 'April' },
      events: [
        { time: '10:00 AM', description: 'Participants report to the venue given.' },
        { time: '11:00 AM', description: 'Round 2 starts.' },
        { time: '2:00 PM', description: 'Round 2 ends.' }
      ]
    }
  };

  return (
    <section id="schedule" className="schedule">
      <h1>SCHEDULE</h1>
      
      <div className="schedule_container">
        <h2>Elevate your skills and collaborate with fellow coders!</h2>
        
        <article className="roadmap">
          <p className="schedule_heading">Round 1</p>
          <div className="roadmap_part-1">
            <div className="date_container">
              <div className="date">{scheduleData.round1.date.day}</div>
              <div className="month">{scheduleData.round1.date.month}</div>
            </div>

            {scheduleData.round1.events.map((event, index) => (
              <React.Fragment key={`r1-${index}`}>
                <div className="schedule_details">
                  <div className="timmings">{event.time}</div>
                  <p>{event.description}</p>
                </div>
                {index < scheduleData.round1.events.length - 1 && (
                  <div>
                    <img className="schedule_arrow schedule_arrow-1" src="/schedule/connector_line.svg" alt="arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className='responsive_arrow'>
              <img className="schedule_arrow schedule_arrow-1" src="/schedule/connector_line.svg" alt="arrow" />
            </div>
          </div>

          <div className="roadmap_part-2">
            {scheduleData.round1.eventsReverse.map((event, index) => (
              <React.Fragment key={`r1r-${index}`}>
                <div className="schedule_details">
                  <div className="timmings">{event.time}</div>
                  <p>{event.description}</p>
                </div>
                {index < scheduleData.round1.eventsReverse.length - 1 && (
                  <div>
                    <img className="schedule_arrow schedule_arrow-2" src="/schedule/connector_line_reverse.svg" alt="arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="nextline_arrow">
              <img className="schedule_arrow" src="/schedule/connector_line_turn.svg" alt="arrow" />
              <div></div>
            </div>
          </div>

          <p className="schedule_heading">Round 2</p>
          <div className="roadmap_part-3">
            <div className="date_container">
              <div className="date">{scheduleData.round2.date.day}</div>
              <div className="month">{scheduleData.round2.date.month}</div>
            </div>

            {scheduleData.round2.events.map((event, index) => (
              <React.Fragment key={`r2-${index}`}>
                <div className="schedule_details">
                  <div className="timmings">{event.time}</div>
                  <p>{event.description}</p>
                </div>
                {index < scheduleData.round2.events.length - 1 && (
                  <div>
                    <img className="schedule_arrow schedule_arrow-1" src="/schedule/connector_line.svg" alt="arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

Schedule.propTypes = {
  schedule: PropTypes.shape({
    round1: PropTypes.shape({
      date: PropTypes.shape({
        day: PropTypes.string,
        month: PropTypes.string
      }),
      events: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string,
          description: PropTypes.string
        })
      ),
      eventsReverse: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string,
          description: PropTypes.string
        })
      )
    }),
    round2: PropTypes.shape({
      date: PropTypes.shape({
        day: PropTypes.string,
        month: PropTypes.string
      }),
      events: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  })
};

Schedule.defaultProps = {
  schedule: null
};