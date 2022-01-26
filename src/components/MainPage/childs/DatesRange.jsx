import './DatesRange.scss';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { DateRange } from 'react-date-range';

const DatesRange = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  return (
    <Card className="dates">
      <Card.Body>
        <Card.Title className="card-title">
          <h3 className="text-title">
            Filter
          </h3>
        </Card.Title>
        <DateRange
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          className="date-range"
        />
      </Card.Body>
    </Card>
  );
};

export default DatesRange;
