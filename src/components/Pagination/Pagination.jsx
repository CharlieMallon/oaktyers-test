import React from "react";
import styles from "./Pagination.module.css";


const Pagination = ({setNumber, setSize}) => {
      const handleChangeNumber = (event) => {
        const value = event.target.value
        if (value > 0) {
          setNumber(event.target.value);
        } else {
          setNumber(1)
          //needs to be reflected on the screen
        }
      };

      const handleChangeSize = (event) => {
        const value = event.target.value
        if (value > 0) {
          setSize(event.target.value);
        } else {
          setSize(25)
          //needs to be reflected on the screen
        }
      };
    
    return (
        <div className={styles.main}>
            <input id='number' type="number" placeholder="page number" onChange={handleChangeNumber} />
            <input id='size' type="number" placeholder="page size" onChange={handleChangeSize}/>
        </div>
    )
}

export default Pagination