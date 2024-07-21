import Contacto from "../components/presentationcard/Contacto"
import Divisor from "../components/presentationcard/Divisor"
import "./fondo.css";

const PresentationCard = () => {
    return (
        <div className="fondo">
            <Divisor />
            <Contacto nombre='Victoria Serra' ocupacion='Desarrolladora React.js' />
            <Divisor />
        </div>
    )
}

export default PresentationCard