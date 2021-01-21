import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { defaultWidth } from './App';
export function Barchart() {
    const options = {
        chart: {
            type: 'bar',
            width: defaultWidth
        },
        title: {
            text: 'Historic World Population by Region'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        }
    };
    const [chartData, setData] = useState({})
    useEffect(() => {
        fetch('/populations').then(response => response.json())
            .then(data => setData(data));
    }, []);
    return (<HighchartsReact containerProps={{
        className: 'chart'
    }} highcharts={Highcharts} options={{ ...chartData, ...options }} />);
}
