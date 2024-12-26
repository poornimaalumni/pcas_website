import { stories, events } from "../data/News_Data";

const NewsRoom = () => {
  return (
    <div className="md:px-8 flex flex-col gap-2">
      {/* Header */}
      <h1 className="md:text-5xl xs:text-2xl font-semibold mb-6">
        <span className="text-orange-500">NEWS</span> ROOM
      </h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Stories Section */}
        <div className="flex flex-col xs:w-full lg:w-2/3 xs:h-80 md:h-[300px] lg:h-[400px] ">
          <h2 className="md:text-2xl xs:text-xl font-bold mb-6">STORIES</h2>
          <div className="bg-gray-100 p-4 rounded-md shadow md:overflow-y-auto xs:overflow-y-auto">
            {stories.map((story) => (
              <div
                key={story.id}
                className="border-b border-gray-300 last:border-none py-4"
              >
                <p className="md:text-sm xs:text-xs text-gray-500 mb-1">{story.date}</p>
                <p className="md:text-lg xs:text-sm">{story.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="flex-1">
          <h2 className="md:text-2xl xs:text-xl font-bold mb-6">EVENTS</h2>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 rounded-md shadow mb-4 last:mb-0"
              >
                <p className="md:text-sm xs:text-xs text-gray-500">{event.type}</p>
                <p className="md:text-3xl text-xl font-bold">{event.date}</p>
                <p className="mt-2 md:text-lg xs:text-sm font-semibold">{event.title}</p>
                <p className="md:text-sm xs:text-xs text-gray-600 mt-1">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsRoom;
