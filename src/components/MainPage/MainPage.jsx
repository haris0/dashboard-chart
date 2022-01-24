import './MainPage.scss';
import { useRef } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { useDasboardData } from '../../services';

const MainPage = () => {
  const isMounted = useRef(true);
  const { loading, data, error } = useDasboardData(isMounted);
  console.log(loading, data, error);

  return (
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
};

export default MainPage;
