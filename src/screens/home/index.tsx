import { AboutMe } from "./AboutMe";
import { Background } from "./Background";
import { MainSection } from "./MainSection";

export const Home = (): JSX.Element => {
  return (
    <div className="relative flex w-full flex-col items-center gap-12 overflow-hidden pb-32">
      <Background />
      <main className="flex w-full max-w-screen-md flex-col items-center justify-center gap-24 px-4 py-12 md:gap-40">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-24">
          <MainSection />
        </div>
        <AboutMe />
      </main>
    </div>
  );
};
