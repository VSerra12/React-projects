/* eslint-disable react/prop-types */

import Address from "./Address"
import Company from "./Company"
import UserItem from "./UserItem"

const User = ({ user }) => {

    return (
        <>
            <UserItem item={"id"} value={user.id} />
            <UserItem item={"name"} value={user.name} />
            <UserItem item={"email"} value={user.username} />
            <Address value={user.address} />
            <UserItem item={"phone"} value={user.phone} />
            <UserItem item={"website"} value={user.website} />
            <Company value={user.company} />
        </>
    )
}

export default User