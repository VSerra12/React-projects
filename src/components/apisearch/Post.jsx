/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import UserContext from "../../contexts/UserContext";

const Post = ({data}) => {

  
  return (
    <>
    <p>{data.body}</p>
    <p className="text-body-secondary fst-italic">- {data.userId}</p>
</>
  )
}

export default Post