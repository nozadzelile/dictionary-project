import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
        return (
        <div className="Results">
            <h2 style={{textTransform:"capitalize"}}>{props.results.word}</h2>
            <div className="Phonetic">
                {props.results.phonetic}
            </div>
            {props.results.meanings
            .slice(0, 1)
            .map(function (meaning, index) {
                return (
                    <div key={index}>    
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
    } else {
        return null;
    }
}
