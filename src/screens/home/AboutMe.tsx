import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Expandable } from "../../components/Expandable";
import { SubititleIcon } from "../../components/SubtitleIcon";
import { Paragraph } from "../../components/Text";
import { TitleIcon } from "../../components/TitleIcon";
import about01 from "../../assets/images/about01.jpg";
import about02 from "../../assets/images/about02.jpg";
import about03 from "../../assets/images/about03.jpg";
import dinosaur from "../../assets/images/dinosaur.png";
import checkCalendar from "../../assets/images/check_calendar.png";
import notebook from "../../assets/images/notebook.png";
import { ImageZoom } from "../../components/ImageZoom";

export const AboutMe = (): JSX.Element => {
  return (
    <Card>
      <TitleIcon iconSrc={dinosaur} title="About me!" />
      <div className="flex w-full flex-wrap justify-between gap-8">
        <ImageZoom
          src={about01}
          alt="Furkan Gercek1"
          className="h-24 flex-1 rounded md:h-32"
        />
        <ImageZoom
          src={about02}
          alt="Furkan Gercek2"
          className="h-24 flex-1 rounded md:h-32"
        />
        <ImageZoom
          src={about03}
          alt="Furkan Gercek3"
          className="h-24 flex-1 rounded md:h-32"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>I am 25 years old.</Paragraph>
        <Paragraph>
          I am a skilled and motivated Frontend Developer with a passion for
          creating visually appealing and user-friendly websites and
          applications. With 2 years experience in the industry, I am able to
          quickly adapt to new challenges. I take great pride in my work and am
          always seeking to improve my skills and advance my career.
        </Paragraph>
        <Paragraph>
          I enjoy working in a team environment and am able to effectively
          communicate and collaborate with both technical and non-technical
          stakeholders.
        </Paragraph>
        <Divider />
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={checkCalendar} title="placeholder1" />}
        >
          <Paragraph>
            Placeholder:
            <ul className="mt-2 flex list-disc flex-col gap-2 pl-6">
              <li></li>
              <li>.</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Paragraph>
        </Expandable>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={notebook} title="placeholder2" />}
        >
          <Paragraph>ipsum lorem</Paragraph>
        </Expandable>
        <Divider />
      </div>
    </Card>
  );
};
