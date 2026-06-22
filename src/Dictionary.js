import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"

export default function Dictionary() {
    let [keyword, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "bc0c2310f91t07094a4ao08773084492";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeyword} />
            </form>
            <Results results={results} />
        </div>
    )}
 