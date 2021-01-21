const express = require('express');
const app = express();
const getNum = (num)=>{
    return Math.floor((Math.random() * num) + 1)
} 
app.get('/hey', (req, res) => res.json({ "foo": "bar" }))
app.get('/populations', (req, res) => {
    console.log("loading data")
    res.json(
        {
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            series: [{
                name: 'Year 1800',
                data: [getNum(1000), getNum(1000), getNum(1000), getNum(1000), getNum(1000)]
            }, {
                name: 'Year 1900',
                data: [getNum(1000), getNum(1000), getNum(1000), getNum(1000), getNum(1000)]
            }, {
                name: 'Year 2000',
                data: [getNum(1000), getNum(1000), getNum(1000), getNum(1000), getNum(1000)]
            }, {
                name: 'Year 2016',
                data: [getNum(1000), getNum(1000), getNum(1000), getNum(1000), getNum(1000)]
            }]
        }
    )
}
)
app.get('/fruitsales', (req, res) => {
    console.log("loading data")
    res.json({
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
          },
          series: [{
            type: 'column',
            name: 'Jane',
            data: [getNum(10), getNum(10), getNum(10), getNum(10), getNum(10)]
          }, {
            type: 'column',
            name: 'John',
            data: [getNum(10), getNum(10), getNum(10), getNum(10), getNum(10)]
          }, {
            type: 'column',
            name: 'Joe',
            data: [getNum(10), getNum(10), getNum(10), getNum(10), getNum(10)]
          }, {
            type: 'spline',
            data: [getNum(10), getNum(10), getNum(10), getNum(10), getNum(10)],
            marker: {
              lineWidth: 2,
              lineColor: 'rgb(247, 163, 92)',
              fillColor: 'white'
            }
          }]
    })
})
app.get('/stockdata', (req, res) => {
    res.json({
        series: [{
            type: 'line',
            data: [[Date.UTC(2013, 5, 2), Math.random()],
            [Date.UTC(2013, 5, 3), Math.random()],
            [Date.UTC(2013, 5, 4), Math.random()],
            [Date.UTC(2013, 5, 5), Math.random()],
            [Date.UTC(2013, 5, 6), Math.random()],
            [Date.UTC(2013, 5, 7), Math.random()],
            [Date.UTC(2013, 5, 8), Math.random()]]
          }]
    })
})
app.listen(8080)