import React from "react";
import Synonyms from "./Synonyms"
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            
            <p className="Definition">{props.meaning.definition}</p>
         
            <p className="Example">{props.meaning.example}</p>
           <p className="Synonyms"><strong>Synonyms:</strong><br /></p>
           <Synonyms synonym={props.meaning.synonyms} />           
        </div>
    );
}
