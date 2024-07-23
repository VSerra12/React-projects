import { useState } from "react"
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


// eslint-disable-next-line react/prop-types
const Searcher = () => {

    const { getUser } = useContext(UserContext)


    const [id, setId] = useState('')

    const handleChange = e => {
        setId(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (id !== null) {

            getUser(id)
        }
    }

    return (
        <>
            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="ID user" name="id" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Search</button>

            </div>
        </>
    )
}

export default Searcher