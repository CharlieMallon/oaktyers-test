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
            <input className={styles.input} id='number' type="number" placeholder="Page Number" onChange={handleChangeNumber} />
            <input className={styles.input} id='size' type="number" placeholder="Page Size" onChange={handleChangeSize}/>
        </div>
    )
}

export default Pagination