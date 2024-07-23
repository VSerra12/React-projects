/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import UserItem from './UserItem';
import Address from './Address';
import Company from './Company';


const UserListItem = ({ user, eventKey }) => {

    return (
        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{user.id}. {user.name}</Accordion.Header>
                <Accordion.Body>
                    <UserItem item={"id"} value={user.id} />
                    <UserItem item={"name"} value={user.name} />
                    <UserItem item={"email"} value={user.username} />
                    <Address value={user.address} />
                    <UserItem item={"phone"} value={user.phone} />
                    <UserItem item={"website"} value={user.website} />
                    <Company value={user.company} />
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default UserListItem