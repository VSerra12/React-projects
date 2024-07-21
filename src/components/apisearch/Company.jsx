/* eslint-disable react/prop-types */

const Company = (props) => {
    return (
        <>
            <div className="row align-items-start">
                <div className="col">
                    company:
                </div>
                <div className="col">
                    {props.value.name + ", " + props.value.catchPhrase + ", " + props.value.bs}
                </div>
            </div>
        </>
    )
}

export default Company