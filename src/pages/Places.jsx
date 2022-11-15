import CardsSection2 from "../components/CardsSection2";
import FilterSect from "../components/FilterSect";
import { useEffect } from "react";

export default function Places(props) {
  useEffect(() => {
    if (props.modal) {
      props.setModal(false);
    }
    return;
  }, []);

  return (
    <div className='places-container'>
      <FilterSect />
      <CardsSection2 />
    </div>
  );
}
