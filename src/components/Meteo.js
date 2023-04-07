import { useState } from "react";

function Meteo({ temps }) {

    const [climat, setClimat] = useState(temps);
    //affecte la valeur de temps à la variable d'état nommée climat

    const imageDynamique = climat === "Soleil" ? "ciel-clair.png" : "pluvieux.png";

    function getImage(param) {
        return (param === "Soleil") ? "ciel-clair.png" : "pluvieux.png";
    }

    function getAlt() {
        return climat;
    }

    function onChangeMeteo() {
        setClimat((climat === "Soleil") ? "Pluie" : "Soleil");
        console.log(climat);
    }

    return (<div>

        <p>
            <button onClick={() => onChangeMeteo()}>Changer météo</button>
        </p>

        <div>

            <img src={"images/" + imageDynamique} alt={climat} />

            <img src={"images/" + getImage(climat)} alt={getAlt()} />

            {climat === "Soleil" ? <img src="images/ciel-clair.png" alt="Soleil" /> : <img src="images/pluvieux.png" alt="Pluie" />}

            {climat === "Soleil" && <img src="images/ciel-clair.png" alt="Soleil" />}
            {climat === "Pluie" && <img src="images/pluvieux.png" alt="Pluie" />}
        </div>

        {/* <img src="images/ciel-clair.png" alt="Soleil" />
        <img src="images/pluvieux.png" alt="Pluie" /> */}
    </div>);
}

export default Meteo;