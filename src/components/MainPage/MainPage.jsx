import './MainPage.scss';
import { useRef } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { useDasboardData } from '../../services';
import { getConversionItem } from '../../mixin';
import ConversionChart from './childs/ConversionChart';

const MainPage = () => {
  const isMounted = useRef(true);
  const { loading, data } = useDasboardData(isMounted);
  const { conversionItem, conversionCount } = getConversionItem(data.orders);
  console.log(conversionItem, conversionCount);

  return (
    <div className="main-page">
      <Row>
        <Col md={3} className="p-3">
          <div className="box-height">
            {!loading && data && (
              <ConversionChart
                conversionItem={conversionItem}
                conversionCount={conversionCount}
              />
            )}
          </div>
        </Col>
        <Col md={3} className="p-3">
          <div className="box-height">
            Box 2
          </div>
        </Col>
        <Col md={6} className="p-3">
          <div>
            Box 3
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="p-3">
          <div className="box-height">
            Box 4
          </div>
        </Col>
        <Col md={8} className="p-3">
          <div>
            Box 5
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
