import React from "react";
import styles from "./ResultCard.module.css";

const ResultCard = ({ cardData }) => {
      return (
          <div className={styles.main}>
              <h2 >{cardData.name}</h2>
          </div>
      );
  };
  
  export default ResultCard;