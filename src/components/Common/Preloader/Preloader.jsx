import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = () => {
   return (
      <div style={{textAlign: 'center'}}>
         <img src={ preloader } alt='preloader' />
      </div>
   )
}

export default Preloader;
