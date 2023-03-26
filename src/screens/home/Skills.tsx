import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { TitleIcon } from "../../components/TitleIcon";
import chessHorse from "../../assets/images/chess_horse.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import nextjs from "../../assets/images/nextjs.png";
import tailwind from "../../assets/images/tailwind.png";
import chartjs from "../../assets/images/chartjs.png";
import figma from "../../assets/images/figma.png";
import typescript from "../../assets/images/typescript.png";
import sass from "../../assets/images/sass.png";
import redux from "../../assets/images/redux.png";
import storybook from "../../assets/images/storybook.png";
import graphql from "../../assets/images/graphql.png";
import { Frame } from "../../components/Frame";
import { ColoredIcon } from "../../components/Icon";

export const Skills = (): JSX.Element => {
  const Item = ({ name, src }: { name: string; src: string }) => (
    <Frame>
      <ColoredIcon src={src} />
      {name}
    </Frame>
  );

  const SubtitleLight = ({ children }: { children: string }) => (
    <span className="text-lg font-light text-white">{children}</span>
  );

  return (
    <Card>
      <TitleIcon iconSrc={chessHorse} title="Skills" />
      <SubtitleLight>I am confident with</SubtitleLight>
      <div className="flex flex-wrap gap-3">
        <Item name="HTML" src={html} />
        <Item name="CSS" src={css} />
        <Item name="Javascript" src={javascript} />
        <Item name="React" src={react} />
        <Item name="Sass" src={sass} />
        <Item name="Typescript" src={typescript} />
        <Item name="Redux Toolkit" src={redux} />
      </div>
      <Divider />
      <SubtitleLight>I have used in past projects</SubtitleLight>
      <div className="flex flex-wrap gap-3">
        <Item name="Chart.js" src={chartjs} />
        <Item name="TailwindCSS" src={tailwind} />
        <Item name="Figma" src={figma} />
        <Item name="Storybook" src={storybook} />
      </div>
      <Divider />
      <SubtitleLight>I want to learn/deepen in the near future.</SubtitleLight>
      <div className="flex flex-wrap gap-3 pb-4">
        <Item name="Next.js" src={nextjs} />
        <Item name="React Native" src={react} />
        <Item name="GraphQL" src={graphql} />
      </div>
    </Card>
  );
};
