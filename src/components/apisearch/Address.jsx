/* eslint-disable react/prop-types */

const Address = (props) => {
    return (
        <>
            <div className="row align-items-start">
                <div className="col">
                    address:
                </div>
                <div className="col">
                    {props.value.street + ", " + props.value.suite + ", " + props.value.city + ", " + props.value.zipcode}
                </div>
            </div>
        </>
    )
}

export default Address