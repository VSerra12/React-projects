/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"

const UserContext = createContext()

const UserProvider = ({ children }) => {

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

    const [list, setList] = useState(Array)

    const [userName, setUserName] = useState("")

    useEffect(() => {
        getList()
    }, []) 


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

    const getList = async () => {

        const url = 'https://jsonplaceholder.typicode.com/users';

        try {

            const respuesta = await fetch(url, {
                method: "GET" // default, so we can ignore
            })

            if (!respuesta.ok) {
                throw new Error('Ocurrió un error', respuesta.status)
            }

            const listData = await respuesta.json()

            setList(listData)

        } catch (error) {
            console.log('[getProductos]:', error)
        }

    }

    const getUserName = async (id) => {
        const url = 'https://jsonplaceholder.typicode.com/users/' + id;
        try {

            const respuesta = await fetch(url, {
                method: "GET" // default, so we can ignore
            })

            if (!respuesta.ok) {
                throw new Error('Ocurrió un error', respuesta.status)
            }

            const userData = await respuesta.json()

            setUserName(userData.name)

        } catch (error) {
            console.log('[getProductos]:', error)
        }
    }

    const data = {
        user,
        list,
        userName,
        getUser, 
        getList,
        getUserName,
    }

  return <UserContext.Provider value={data}>{ children }</UserContext.Provider>
}

export { UserProvider }
export default UserContext
