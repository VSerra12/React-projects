import { useEffect, useState } from "react"
import Accordion from 'react-bootstrap/Accordion';
import PostListItem from "./PostListItem";

const PostList = () => {
    const [list, setList] = useState(Array)

    useEffect(() => {
        getList()
    }, []) /* Array de referencias vacío. Solo se va a ejecutar una unica */

    const getList = async () => {

        const url = 'https://jsonplaceholder.typicode.com/posts';

        try {

            const respuesta = await fetch(url, {
                method: "GET" // default, so we can ignore
            })

            if (!respuesta.ok) {
                throw new Error('Ocurrió un error', respuesta.status)
            }

            const postData = await respuesta.json()

            setList(postData)

        } catch (error) {
            console.log('[getProductos]:', error)
        }

    }

    return (
        <>
            <Accordion>
                {
                    list.map((post, idx) => (
                        <PostListItem
                            key={idx}
                            post={post}
                            eventKey={idx}
                        />
                    ))
                }

            </Accordion>
        </>
    )
}

export default PostList