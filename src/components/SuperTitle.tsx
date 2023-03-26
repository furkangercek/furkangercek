import curve from "../assets/images/curve.png";
import profile from "../assets/images/profile.png";

export const SuperTitle = (): JSX.Element => {
  return (
    <div className="flex w-full items-center gap-6">
      <img
        src={curve}
        alt="curve"
        className="hidden h-20 md:inline-block md:h-28"
      />
      <div className="flex flex-1 flex-col gap-1 md:gap-4">
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          Furkan Gercek
        </h1>
        <h2 className="ml-1 text-xl font-light text-white md:text-3xl md:ml-2">
          React Frontend Developer
        </h2>
      </div>
      <img
        src={profile}
        alt="Furkan Gercek"
        className="h-20 rounded-full md:h-32"
      />
    </div>
  );
};
