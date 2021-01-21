import React,{useState,useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { defaultWidth } from './App';

export function LineChart() {
  const options = {
    title: {
      text: 'Stock Performance'
    },
    chart: {
      width: defaultWidth
    }
  };
  const [chartData, setData] = useState({})
  useEffect(() => {
      fetch('/stockdata').then(response => response.json())
          .then(data => setData(data));
  }, []);
  return (<HighchartsReact containerProps={{
    className: 'chart'
  }} highcharts={Highcharts} options={{...chartData,...options}} />);
}
