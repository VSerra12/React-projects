/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import User from './User';

const UserListItem = ({ user, eventKey }) => {

    return (
        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{user.id}. {user.name}</Accordion.Header>
                <Accordion.Body>
                    <User data={user}/>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default UserListItem