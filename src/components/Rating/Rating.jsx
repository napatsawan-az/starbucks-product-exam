const Rating = ({ score, maxScore = 5 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxScore }, (_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            index < score ? "bg-stbGreen" : "bg-stbLightGray"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
