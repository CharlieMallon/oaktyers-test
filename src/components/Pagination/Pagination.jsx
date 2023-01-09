import React, { useState } from "react";
import styles from "./Pagination.module.css";


const Pagination = () => {
    const [number, setNumber] = useState('');
      const handleChangeNumber = (event) => {
        setNumber(event.target.value);
      };
    const [size, setSize] = useState('');
      const handleChangeSize = (event) => {
        setSize(event.target.value);
      };
    
      //can return 0, could cause issues
      console.log(number, size)
    return (
        <div className={styles.main}>
            <input type="number" placeholder="page number" onChange={handleChangeNumber} />
            <input type="number" placeholder="page size" onChange={handleChangeSize}/>
        </div>
    )
}

export default Pagination