/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import Post from './Post';

const PostListItem = ({ post, eventKey }) => {
  return (
    <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{post.id}. {post.title}</Accordion.Header>
                <Accordion.Body>
                    <Post data={post}/>
                </Accordion.Body>
            </Accordion.Item>
        </>
  )
}

export default PostListItem