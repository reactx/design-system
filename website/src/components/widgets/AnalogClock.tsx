import React, { useEffect, useState, FC } from 'react';
import { generateClass } from '../../utils';
import * as uuid from 'uuid';

export type analogClockProps = {
  id?: string,
  theme?: 'classic-clock' |
  'white-clock' |
  'red-clock',
  title?: string,
  className?: string,
};


const AnalogClockComponent = (props:analogClockProps) => {
  const [id, setId] = useState(uuid.v4());

  const setClockHands = () => {
    let secondElm = document.querySelector('#c' + id + ' .clock-hand-second'); 
    let minuteElm = document.querySelector('#c' + id + ' .clock-hand-minute');
    let hourElm = document.querySelector('#c' + id + ' .clock-hand-hour');

    if (secondElm && minuteElm && hourElm) {
      let now = new Date();
      let second = now.getSeconds();
      let minute = now.getMinutes();
      let hour = now.getHours();
      secondElm.style.transform = 'rotate(' + Number(second * 6) + 'deg)';
      minuteElm.style.transform = 'rotate(' + Number(minute * 6) + 'deg)';
      hourElm.style.transform =
        'rotate(' + Number((hour - 12) * 30 + minute / 2) + 'deg)';
    }
  };

  useEffect(() => {
    setClockHands();
    setInterval(setClockHands, 500);
  }, [props]);

  const liList = () => {
    let content = [];
    for (let i = 0; i < 12; i++) {
      content.push(
        <li
          key={i}
          style={{ transform: 'rotate(' + (i + 1) * 30 + 'deg)' }}
        ></li>,
      );
    }
    return content;
  };

  return (
    <div
    className={generateClass(props, 'analog-clock ')}
    id={props.id}
    title={props.title}>
      <div className="clock-face">
        <ul className="clock-marks">{liList()}</ul>
        <div className="clock-hands" id={'c' + id}>
          <div className="clock-hand-hour"></div>
          <div className="clock-hand-minute"></div>
          <div className="clock-hand-second"></div>
          <div className="clock-center-circle"></div>
        </div>
      </div>
    </div>
  );
};

const AnalogClock: FC<analogClockProps> = React.forwardRef((props) => (
  <AnalogClockComponent {...props} />
));


AnalogClock.defaultProps = {
  title: 'AnalogClock Text',
  theme: 'classic-clock',
  className: '',
};
export { AnalogClock };
