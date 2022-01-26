import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './ConversionChart.scss';
import Dot from '../../../assets/Dot.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const ConversionChart = ({ conversionItem, conversionRevenue }) => {
  const conversionData = {
    labels: conversionItem,
    datasets: [
      {
        label: '# of Votes',
        data: conversionRevenue,
        backgroundColor: [
          '#E4EAEB',
          '#725E9C',
          '#5C8F94',
          '#EBA45E',
        ],
        borderColor: [
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
  };

  return (
    <Card className="conversion">
      <Card.Body>
        <Card.Title className="card-title">
          <h3 className="text-title">
            Conversion
          </h3>
          <button
            type="button"
            className="btn-option"
          >
            <img src={Dot} alt="options" />
          </button>
        </Card.Title>
        <Card.Text>
          <Pie data={conversionData} options={options} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ConversionChart;
