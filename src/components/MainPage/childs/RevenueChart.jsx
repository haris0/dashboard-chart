import './RevenueChart.scss';
import { Card } from 'react-bootstrap';
import 'chartjs-adapter-moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
);

const RevenueChart = ({ revenueData }) => {
  const data = {
    datasets: [
      {
        data: revenueData,
        fill: true,
        borderColor: '#789764ab',
        backgroundColor: '#789764ab',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        ticks: {
          callback(value) {
            return `$ ${value}`;
          },
        },
      },
    },
  };
  return (
    <Card className="revenue">
      <Card.Body>
        <Card.Title className="card-title">
          <h3 className="text-title">
            Revenue
          </h3>
        </Card.Title>
        <Card.Text>
          <Line
            options={options}
            data={data}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RevenueChart;
