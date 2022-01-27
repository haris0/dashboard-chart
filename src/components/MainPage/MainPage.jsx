import './MainPage.scss';
import { useRef } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { useDasboardData } from '../../services';
import { getConversionItem, getRevenue, getUsers } from '../../mixin';
import ConversionChart from './childs/ConversionChart';
import UsersChart from './childs/UsersChart';
import RevenueChart from './childs/RevenueChart';
import DatesRange from './childs/DatesRange';
import OrdersTable from './childs/OrdersTable';

const MainPage = () => {
  const isMounted = useRef(true);
  const { loading, data } = useDasboardData(isMounted);
  const { conversionItem, conversionRevenue } = getConversionItem(data.orders);
  const { usersName, usersCount } = getUsers(data.orders);
  const revenueData = getRevenue(data.orders);

  return (
    <div className="main-page">
      <Row>
        <Col md={3} className="p-3">
          <div>
            {!loading && data && (
              <ConversionChart
                conversionItem={conversionItem}
                conversionRevenue={conversionRevenue}
              />
            )}
          </div>
        </Col>
        <Col md={3} className="p-3">
          <div>
            {!loading && data && (
              <UsersChart
                usersName={usersName}
                usersCount={usersCount}
              />
            )}
          </div>
        </Col>
        <Col md={6} className="p-3">
          <div>
            {!loading && data && (
              <RevenueChart
                revenueData={revenueData}
              />
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="p-3">
          <div>
            {!loading && data && (
              <DatesRange />
            )}
          </div>
        </Col>
        <Col md={8} className="p-3">
          <div>
            <OrdersTable ordersData={data.orders} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
