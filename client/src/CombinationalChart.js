import React ,{useEffect,useState}from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { defaultWidth } from './App';
const data = {
}
export function CombinationalChart() {
  const options = {
    chart: {
      width: defaultWidth
    },
    title: {
      text: 'Fruit Sales'
    },
    labels: {
        items: [{
          html: 'Total fruit consumption',
          style: {
            left: '50px',
            top: '18px',
            color: ( // theme
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
            ) || 'black'
          }
        }]
      },
  };
  const [chartData, setData] = useState({})
  useEffect(() => {
      fetch('/fruitsales').then(response => response.json())
          .then(data => setData(data));
  }, []);
  return (<HighchartsReact containerProps={{
    className: 'chart'
  }} highcharts={Highcharts} options={{...chartData,...options}} />);
}
