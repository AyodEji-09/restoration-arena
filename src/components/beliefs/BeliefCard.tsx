const BeliefCard = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="bl-box max-w-lg space-y-4">
      <img src={`/icons/${icon}`} alt="dove-icon" loading="lazy" className="!mr-auto" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BeliefCard;
