const ServiceCard = ({
  icon,
  serviceName,
  time,
}: {
  icon?: string;
  serviceName: string;
  time: string[];
}) => {
  return (
    <div>
      <img src={`/icons/${icon || "Icon.png"}`} alt="icon" />
      <h2>{serviceName}</h2>
      {time.map((t) => (
        <p>{t}</p>
      ))}
    </div>
  );
};

export default ServiceCard;
