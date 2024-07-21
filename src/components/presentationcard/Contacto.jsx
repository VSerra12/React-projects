import './contacto.css'
const Contacto = (item) => {
  return (
    <div className="contacto">
        <p className="nombre">{item.nombre}</p>
        <p className="ocupacion">{item.ocupacion}</p>
    </div>
  )
}

export default Contacto