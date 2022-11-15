import HeroHome from "./HeroHome";
import LearnMore from "./LearnMore";
import CardSection from "./CardSection";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    if (props.modal) {
      props.setModal(false);
    }
    return;
  }, []);

  return (
    <>
      <HeroHome />
      <CardSection />
      <LearnMore />
    </>
  );
}
