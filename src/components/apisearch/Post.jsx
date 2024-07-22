/* eslint-disable react/prop-types */

const Post = ({data}) => {
  return (
    <>
    <p>{data.body}</p>
    <p className="text-body-secondary fst-italic">- {data.userId}</p>
</>
  )
}

export default Post