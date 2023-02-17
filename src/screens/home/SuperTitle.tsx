export const SuperTitle = (): JSX.Element => {
  return (
    <div className="flex w-full items-center gap-6">
      <img src="../../assets/images/curve.png" alt="curve" className="h-28" />
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-5xl font-bold text-white">Furkan Gercek</h1>
        <h2 className="ml-2 text-3xl font-light text-white">
          React Frontend Developer
        </h2>
      </div>
      <img
        src="../../assets/images/profile.png"
        alt="Furkan Gercek"
        className="rounded-full h-32"
      />
    </div>
  );
};
