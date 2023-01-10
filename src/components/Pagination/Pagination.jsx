import React from "react";
import styles from "./Pagination.module.css";


const Pagination = ({setNumber, number, setSize, size}) => {
      const handleChangeNumber = (event) => {
        const value = event.target.value
        if (value > 0) {
          setNumber(value);
        } else {
          setNumber(1)
        }
      };

      const handleChangeSize = (event) => {
        const value = event.target.value
        if (value > 0) {
          setSize(value);
        } else {
          setSize(24)
        }
      };
    
    return (
        <div className={styles.main}>
            <input 
              className={styles.input} 
              id='number' 
              type="number" 
              placeholder="Page Number" 
              value={number}
              min='1'
              onChange={handleChangeNumber} />
            <input 
              className={styles.input} 
              id='size' 
              type="number" 
              placeholder="Page Size" 
              value={size}
              min='1'
              onChange={handleChangeSize}/>
        </div>
    )
}

export default Pagination