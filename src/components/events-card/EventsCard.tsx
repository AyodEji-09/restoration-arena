const EventsCard = ({
  upcoming,
  onClick,
  title,
  image,
  date,
  location,
}: {
  title: string;
  image: string;
  date: Date;
  location: string;
  excerpt: string;
  upcoming?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden border border-gray-300">
      <div className="h-[180px] overflow-hidden relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition ease-in-out duration-1000"
          onClick={onClick}
        />
        {upcoming && (
          <div
            className={`absolute left-0 bottom-0 bg-tertiary p-2 h-16 w-16 flex justify-center items-center text-xl font-bold text-white rounded-full`}
          >
            {date
              .toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })
              .replace(
                /(\d+)(?=\s)/,
                (day) => day + (["st", "nd", "rd"][(+day % 10) - 1] || "th")
              )}
          </div>
        )}
      </div>
      <div className="p-4 space-y-6">
        <article>
          <h2 className="text-xl font-bold capitalize">{title}</h2>
          <p className="font-medium text-black/80">
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}{" "}
            | {location}
          </p>
        </article>
      </div>
    </div>
  );
};

export default EventsCard;
