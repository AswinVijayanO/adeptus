import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import GridLayout from 'react-grid-layout';
import { CombinationalChart } from './CombinationalChart';
import { LineChart } from './LineChart';
import { Barchart } from './Barchart';
const { Header, Content } = Layout;
export const defaultWidth = 350



const layout = [
  { i: 'a', x: 0, y: 0, w: 4, h: 8 },
  { i: 'b', x: 4, y: 0, w: 4, h: 8 },
  { i: 'c', x: 8, y: 0, w: 4, h: 8 }
];

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h1>Dashboard</h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <GridLayout className="layout" layout={layout} cols={12} rowHeight={42} width={1200}>
                <div className="box" key="a">
                  <Barchart
                  />
                </div>
                <div className="box" key="b" >
                  <LineChart />
                </div>
                <div className="box" key="c">
                  <CombinationalChart
                  />
                </div>
              </GridLayout>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
