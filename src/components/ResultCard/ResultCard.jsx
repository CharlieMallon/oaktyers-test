import React from "react";
import styles from "./ResultCard.module.css";

const ResultCard = ({ cardData }) => {
      return (
          <div className={styles.main}>
              <h2 className={styles.name}>{cardData.name}</h2>
              <p>{cardData.tagline}</p>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={cardData.image_url} alt={cardData.name} />
            </div>
          </div>
      );
  };
  
  export default ResultCard;