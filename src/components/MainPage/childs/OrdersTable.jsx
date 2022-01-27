import './OrdersTable.scss';
import { Table } from 'react-bootstrap';
import { convertDate } from '../../../mixin';

const OrdersTable = ({ ordersData }) => (
  <div className="orders-table">
    <h3 className="order-title">Orders</h3>
    <div className="scrollable-table">
      <Table hover>
        <thead>
          <tr className="table-col">
            <th>Order Number</th>
            <th>Status</th>
            <th>Operator</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.order_id} className="table-row">
              <td>#{order.order_id.split('-')[0]}</td>
              <td>
                <div className={`status ${order.status}`}>
                  {order.status}
                </div>
              </td>
              <td>{order.full_name}</td>
              <td className="location-col">{order.location}</td>
              <td>{convertDate(new Date(order.start_date), true)}</td>
              <td>{convertDate(new Date(order.due_date), true)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default OrdersTable;
