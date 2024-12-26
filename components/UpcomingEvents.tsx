import React from 'react';

const UpcomingEvents = () => {
    const events = [
        {
          img: '/eve1.svg',
          title: 'Grand Alumni Meet 2024',
          date: 'December 28, 2024',
          time: '3:00 PM',
          venue: 'OAT, PCE',
        },
      ];

  return (
    <div className="upcoming-events-section text-center px-8 md:py-12 xs:py-5 md:mb-20 xs:mb-9">
        <h1 className="md:text-5xl xs:text-2xl font-bold md:mb-16 xs:mb-8">
          <span className="text-blue-600">UPCOMING</span> EVENTS
        </h1>
        <div className="flex flex-wrap justify-center md:gap-8 xs:gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-md overflow-hidden w-full xs:w-[60%] md:w-[48%] lg:w-[30%]"
            >
              {/* Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover"
              />

              {/* Details */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="mb-1">Date: {event.date}</p>
                <p className="mb-1">Time: {event.time}</p>
                <p className="mb-1">Venue: {event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default UpcomingEvents;
