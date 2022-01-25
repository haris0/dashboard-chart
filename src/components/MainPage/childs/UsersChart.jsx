import './UsersChart.scss';
import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Dot from '../../../assets/Dot.png';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const UsersChart = ({ usersName, usersCount }) => {
  const data = {
    labels: usersName,
    datasets: [
      {
        label: '# of Votes',
        data: usersCount,
        backgroundColor: [
          '#E4EAEB',
          '#725E9C',
          '#5C8F94',
          '#EBA45E',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
      },
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          padding: 20,
          boxWidth: 5,
          boxHeight: 5,
          marginTop: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="card-title">
          <h3 className="text-title">
            Users
          </h3>
          <button
            type="button"
            className="btn-option"
          >
            <img src={Dot} alt="options" />
          </button>
        </Card.Title>
        <Card.Text>
          <PolarArea data={data} options={options} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UsersChart;
