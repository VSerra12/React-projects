/* eslint-disable react/prop-types */

const UserItem = (props) => {

    return (
        <>
            <div className="row align-items-start">
                <div className="col">
                    {props.item}:
                </div>
                <div className="col">
                    {props.value}
                </div>
            </div>
        </>
    )
}

export default UserItem