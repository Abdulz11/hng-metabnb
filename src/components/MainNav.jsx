import Navbar from "./Navbar";
import NavSmall from "./NavSmall";
import { useEffect, useState } from "react";

export default function MainNav(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
      {width < 900 ? (
        <NavSmall
          menu={props.menu}
          setMenu={props.setMenu}
          setModal={props.setModal}
        />
      ) : (
        <Navbar
          setModal={props.setModal}
          menu={props.menu}
          setMenu={props.setMenu}
        />
      )}
    </>
  );
}
