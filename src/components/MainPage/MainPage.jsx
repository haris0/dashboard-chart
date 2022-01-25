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
        <Col md={3}>
          <div className="box-height">
            Box 1
          </div>
        </Col>
        <Col md={3}>
          <div className="box-height">
            Box 2
          </div>
        </Col>
        <Col md={6}>
          <div>
            Box 3
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="box-height">
            Box 4
          </div>
        </Col>
        <Col md={8}>
          <div>
            Box 5
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
