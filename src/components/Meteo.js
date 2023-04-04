function Meteo({ temps }) {

    const imageDynamique = temps === "Soleil" ? "ciel-clair.png" : "pluvieux.png";

    function getImage(param) {
        return (param === "Soleil") ? "ciel-clair.png" : "pluvieux.png";
    }

    function getAlt() {
        return temps;
    }

    return (<div>
        <img src={"images/" + imageDynamique} alt={temps} />

        <img src={"images/" + getImage(temps)} alt={getAlt()} />

        {temps === "Soleil" ? <img src="images/ciel-clair.png" alt="Soleil" /> : <img src="images/pluvieux.png" alt="Pluie" />}

        {temps === "Soleil" && <img src="images/ciel-clair.png" alt="Soleil" />}
        {temps === "Pluie" && <img src="images/pluvieux.png" alt="Pluie" />}

        {/* <img src="images/ciel-clair.png" alt="Soleil" />
        <img src="images/pluvieux.png" alt="Pluie" /> */}
    </div>);
}

export default Meteo;