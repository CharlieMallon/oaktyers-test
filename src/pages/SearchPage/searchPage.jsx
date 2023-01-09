import React, {useState} from "react";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./SearchPage.module.css"


const SearchPage = () => {
    // result cards go here
    const [number, setNumber] = useState('');
    const [size, setSize] = useState('');

    console.log(number, size)
    return (
        <div className = {styles.main}>
            < Pagination setNumber={setNumber} setSize={setSize}/>
        </div>
    )
}

export default SearchPage