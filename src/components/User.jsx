/* eslint-disable react/prop-types */

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
            <UserItem item={"address"} value={props.data.address.street + ", " + props.data.address.suite + ", " + props.data.address.city + ", " + props.data.address.zipcode} />
            <UserItem item={"phone"} value={props.data.phone} />
            <UserItem item={"website"} value={props.data.website} />
            <UserItem item={"company"} value={props.data.company.name + ", " + props.data.company.catchPhrase + ", " + props.data.company.bs} />
        </>
    )
}

export default User