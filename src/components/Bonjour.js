import './Bonjour.css';

function Bonjour({ prenom }) {

    const message = "Comment vas-tu ?"

    return (
        <div className="Bonjour">
            <p>Bonjour {prenom} ! {message}</p>
        </div>
    );
}

export default Bonjour;