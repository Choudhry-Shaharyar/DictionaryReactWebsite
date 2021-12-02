export function Entry (props){
    return(
        // building the ouput out the typed word rectangle
        <div className = "Entry">
            <h2> {props.wordObject.word}</h2>
            <h3> {props.wordObject.phonetic}</h3>
            <p>{props.wordObject.origin}</p>
            <div className = "Meanings">
                {props.wordObject.meanings.map((meanings) => {
                return ( 
                <div className="Meaning">
                 <p> {meanings.definitions[0].definition}</p>    
                </div>
                );
            })}
          </div>
        </div>
    );
}