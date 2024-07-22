import { useEffect, useState } from "react"
import Accordion from 'react-bootstrap/Accordion';
import UserListItem from "./UserListItem";

const UserList = () => {
    const [list, setList] = useState(Array)

    useEffect(() => {
        getList()
    }, []) /* Array de referencias vacío. Solo se va a ejecutar una unica */

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

    return (
        <>
            <Accordion>
                {
                    list.map((user, idx) => (
                        <UserListItem
                            key={idx}
                            user={user}
                            eventKey={idx}
                        />
                    ))
                }

            </Accordion>
        </>
    )
}

export default UserList