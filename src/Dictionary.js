import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import bookImg from './dictionary.png';
import Photos from "./Photos";


export default function Dictionary() {
    let [keyword, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePhotoResponse(response) {
        console.log(response.data)
        setPhotos(response.data.photos)
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "bc0c2310f91t07094a4ao08773084492";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

        let photoApiKey = "bc0c2310f91t07094a4ao08773084492";
        let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`
        axios.get(photoApiUrl, {
            headers: {
                Authorization: `Bearer ${photoApiKey}`
            }
        }).then(handlePhotoResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
            <div className="Header">
                <img src={bookImg} alt="Book" className="book-image" />
                <h1>Dictionary</h1>
            </div>
            </section>

            <section>
            <form onSubmit={search}>
                <h2>Search for a word</h2>
            <input type="search" autoFocus={true} onChange={handleKeyword} />
            <div className="hint">
                Suggested words: wine, sleep, skyline, book... 
            </div>
            </form>
            </section>
            <Results results={results} />

            <Photos photos={photos} />
        </div>
    )}
 