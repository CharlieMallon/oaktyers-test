import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ResultCard from "../../components/ResultCard/ResultCard";
import styles from "./SearchPage.module.css"


const SearchPage = () => {
    // boxes for ?page and ?per_page go here
    // result cards go here
    return (
        <div className = {styles.main}>
            < Pagination />
            < ResultCard />
        </div>
    )
}

export default SearchPage