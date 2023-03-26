import { useContext } from "react";
import { Link } from "./Link";

export const Footer = (): JSX.Element => {
  const email: string = "furkangercek97@gmail.com";
  return (
    <footer className="flex flex-col items-center gap-4 py-4 text-white sm:flex-row-reverse">
      <Link to={`mailto:${email}`}>{email}</Link>
      <span className="h-6 border-light-48/160 text-sm sm:border-r sm:pr-4 sm:text-base">
        by Furkan Gercek, 2023
      </span>
    </footer>
  );
};
