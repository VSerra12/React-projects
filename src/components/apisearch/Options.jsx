import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import UserSearcher from './UserSearcher';
import UserList from './UserList';
import PostList from './PostList';

const Options = () => {

    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">User Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Users List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thrid">Posts List</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">{<UserSearcher/>}</Tab.Pane>
            <Tab.Pane eventKey="second">{<UserList/>}</Tab.Pane>
            <Tab.Pane eventKey="thrid">{<PostList/>}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
  }


export default Options