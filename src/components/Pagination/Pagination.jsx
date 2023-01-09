import React from "react";
import styles from "./Pagination.module.css";


const Pagination = ({setNumber, setSize}) => {
      const handleChangeNumber = (event) => {
        setNumber(event.target.value);
      };

      const handleChangeSize = (event) => {
        setSize(event.target.value);
      };
    
    return (
        <div className={styles.main}>
            <input type="number" placeholder="page number" onChange={handleChangeNumber} />
            <input type="number" placeholder="page size" onChange={handleChangeSize}/>
        </div>
    )
}

export default Pagination