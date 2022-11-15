import React from "react";
import settingslogo from "../st3images/setting-5.png";

export default function FilterSect() {
  return (
    <div className='filter-container'>
      <div className='filter-names'>
        <p>Restaurant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
      </div>
      <div className='filter-div'>
        <p>Location</p>
        <span>
          <img src={settingslogo} alt='' />
        </span>
      </div>
    </div>
  );
}
