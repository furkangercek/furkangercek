import bg01 from "../../assets/images/bg01.png";
import bg02 from "../../assets/images/bg02.png";
import bg03 from "../../assets/images/bg03.png";
import bg04 from "../../assets/images/bg04.png";

export const Background = (): JSX.Element => {
  return (
    <div className="absolute inset-0 -z-10">
      <img src={bg01} alt="Mountain" className="min-h-screen object-cover" />
      <img src={bg02} alt="Cave" className="min-h-screen object-cover" />
      <img
        src={bg03}
        alt="Submarine cave"
        className="min-h-screen object-cover"
      />
      <img src={bg04} alt="Deep ocean" className="min-h-screen object-cover" />
    </div>
  );
};
