import React from "react";
function HomeScreenCard({
  title,
  image,
  count,
  Downfall,
  UpFall,
  fallPosition,
  fallBy,
}) {
  return (
    <div className="w-[260px] font-inter h-[158px] flex-col justify-between flex p-4 bg-white rounded-3xl">
      <div className="flex items-center justify-between">
        <p className="text-xl w-[10%] font-medium">{title}</p>
        <img src={image} alt="image" className="h-[40px] w-[40px]" />
      </div>

      <p className="text-4xl mt-2 text-center font-bold text-primary">
        {count}
      </p>
      <div className="flex justify-center mt-2 items-center gap-1">
        {fallPosition === "increase" ? (
          <img src={UpFall} alt="img" />
        ) : (
          <img src={Downfall} alt="img" />
        )}
        <p className="text-lg text-primary font-bold">{fallBy}</p>
        <p className="text-xs text-secondary">
          {fallPosition === "increase" ? "(Falling by)" : "(Rising by)"}
        </p>
      </div>
    </div>
  );
}

export default HomeScreenCard;
