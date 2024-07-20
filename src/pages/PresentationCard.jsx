import Contacto from "../components/Contacto"
import Divisor from "../components/Divisor"
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