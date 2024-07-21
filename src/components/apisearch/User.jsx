/* eslint-disable react/prop-types */

import Address from "./Address"
import Company from "./Company"
import UserItem from "./UserItem"

// import UserItem from "./UserItem"

const User = (props) => {

    if(props.data.id === undefined || props.data.id === null){
        return <></>
    }

    return (
        <>
            <UserItem item={"id"} value={props.data.id} />
            <UserItem item={"name"} value={props.data.name} />
            <UserItem item={"email"} value={props.data.username} />
            <Address value={props.data.address}/>
            <UserItem item={"phone"} value={props.data.phone} />
            <UserItem item={"website"} value={props.data.website} />
            <Company value={props.data.company} />
        </>
    )
}

export default User