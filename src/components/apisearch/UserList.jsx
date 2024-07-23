import { useContext } from "react"
import Accordion from 'react-bootstrap/Accordion';
import UserListItem from "./UserListItem";
import UserContext from "../../contexts/UserContext";

const UserList = () => {
    
    const { list } = useContext(UserContext)

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