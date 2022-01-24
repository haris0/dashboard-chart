import './MainPage.scss';
import {
  Col,
  Row,
} from 'react-bootstrap';

const MainPage = () => (
  <div className="main-page">
    <Row>
      <Col md={3}>Satu</Col>
      <Col md={3}>Satu</Col>
      <Col md={6}>Satu</Col>
    </Row>
    <Row>
      <Col md={4}>Satu</Col>
      <Col md={8}>Satu</Col>
    </Row>
  </div>
);

export default MainPage;
