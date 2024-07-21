import { useState } from "react";
import Searcher from "../components/apisearch/Searcher";
import User from "../components/apisearch/User";
const ApiSearch = () => {

  const [user, setUser] = useState({
    id: null,
    name: null,
    username: null,
    email: null,
    address: {
      street: null,
      suite: null,
      city: null,
      zipcode: null,
      geo: {
        lat: null,
        lng: null
      }
    },
    phone: null,
    website: null,
    company: {
      name: null,
      catchPhrase: null,
      bs: null
    }
  })



  const getUser = async (id) => {

    const url = 'https://jsonplaceholder.typicode.com/users/' + id;

    try {

      const respuesta = await fetch(url, {
        method: "GET" // default, so we can ignore
      })

      if (!respuesta.ok) {
        throw new Error('Ocurrió un error', respuesta.status)
      }

      const userData = await respuesta.json()

      setUser(userData)

    } catch (error) {
      console.log('[getProductos]:', error)
    }

  }

  return (
    <>
      <div className="card text-center position-absolute top-50 start-50 translate-middle">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <Searcher
            getUser={getUser} />
        </div>
        <div className="card-footer text-body-secondary">
          <div className="container text-center">
            <User data={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApiSearch