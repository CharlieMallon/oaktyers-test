import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import styles from "./SearchResults.module.css";


const SearchResults = ({ data }) => {
    
    return (
        <div className={styles.main}>
            {data && data.map((cardData) => (
                < ResultCard cardData={cardData} id={cardData.id}/>
            ))}
        </div>
    )
}

export default SearchResults