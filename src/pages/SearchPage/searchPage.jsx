import React, {useState, useEffect} from "react";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import SearchResults from "../../components/SearchResults/SearchResults";
import styles from "./SearchPage.module.css"


const SearchPage = () => {
    // result cards go here
    const [number, setNumber] = useState('1');
    const [size, setSize] = useState('25');
    const [data, setData] = useState('')

    console.log(number, size)

    useEffect(() => {
        async function getData() {
            try {
              const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${number}&per_page=${size}`);
              setData(response.data)
            } catch (error) {
              console.error(error);
            }
          }
          getData(number, size)
    }, [number, size])
    
    return (
        <div className = {styles.main}>
            < Pagination setNumber={setNumber} setSize={setSize}/>
            < SearchResults data={data}/>
        </div>
    )
}

export default SearchPage