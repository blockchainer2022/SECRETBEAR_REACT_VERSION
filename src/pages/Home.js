/* eslint-disable jsx-a11y/anchor-has-content */
import { useState, useEffect } from "react";
import { Layout } from "../components";
import {
  HeroSection,
  AboutSection,
  RoadmapSection,
  TraitSection,
  GallarySection,
  FaqSection,
  TeamSection,
} from "../sections";
import moment from "moment";
const Home = () => {
  const [show, setShow] = useState(false);
  const difference = +new moment("2021-10-1 21:00:00").utc() - +new Date();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div id="top">
      <a href="#top" className={`sticky-btn ${show ? "show" : null}`}></a>
      <Layout difference={difference}>
        <div className="main-bg">
          <HeroSection
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            difference={difference}
          />
          <AboutSection />
        </div>
        <RoadmapSection />
        <TraitSection />
        <GallarySection />
        <FaqSection />
        <TeamSection />
      </Layout>
    </div>
  );
};

export default Home;
