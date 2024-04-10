import React from 'react';
import { Row, Col, Card, Collapse } from 'react-bootstrap';

import PieDonutChart from '../charts/nvd3-chart/chart/PieDonutChart';
import BarDiscreteChart from '../charts/nvd3-chart/chart/BarDiscreteChart';
import BasicTable from '../../components/Table/BasicTable';

const assetGrowth = { title: 'Total assets', amount: '₹ 2,03,03,400', diff: '-20%', icon: 'icon-arrow-down text-c-red', value: 100, class: 'progress-c-theme' };  
const datum = [
    { key: 'RealEstate', y: 55.8, color: '#ff8a65' },
    { key: 'NPS', y: 1.5, color: '#f4c22b' },
    { key: 'Debt', y: 11.8, color: '#04a9f5' },
    { key: 'Equity', y: 12.9, color: '#3ebfea' },
    { key: 'Gold', y: 5.1, color: '#4F5467' },
    { key: 'P2P Lending', y: .3, color: '#1de9b6' },
    { key: 'PF', y: 12.6, color: '#a389d4' }
  ];

const headers = ["#", "Asset name", "Asset type", "Expected ROI", "Current value"]
const data = [
    [1, "Fixed deposits", "Debt", "6%", "₹ 5,00,000"],
    [2, "Mutual funds", "Equity", "12%", "₹ 60,00,000"],
    [3, "SGB-June2023", "Gold", "5%", "₹ 5000000"],
    [4, "PF", "PF", "8%", "₹ 319,522,458"]
  ]

  const assetGrowthData = [
    {
      key: 'Cumulative Return',
      values: [
        {
          label: '2017',
          value: -10,
          color: '#3ebfea'
        },
        {
          label: '2018',
          value: 10,
          color: '#04a9f5'
        },
        {
          label: '2019',
          value: 12,
          color: '#ff8a65'
        },
        {
          label: '2020',
          value: 60,
          color: '#1de9b6'
        },
        {
          label: '2021',
          value: 55,
          color: '#4C5667'
        },
        {
          label: '2022',
          value: 40,
          color: '#69CEC6'
        },
        {
          label: '2023',
          value: 30,
          color: '#a389d4'
        },
        {
          label: '2024',
          value: 12,
          color: '#FE8A7D'
        }
      ]
    }
  ];


const Nvd3Chart = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Asset distribution</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieDonutChart data={datum} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
            <Card>
                <Card.Body>
                    <h6 className="mb-4">{assetGrowth.title}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                <i className={`feather ${assetGrowth.icon} f-30 m-r-5`} /> {assetGrowth.amount} ({assetGrowth.diff} since last year)
                            </h3>
                        </div>
                    </div>
                    <BarDiscreteChart data={assetGrowthData} /> 
                </Card.Body>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col>
            <BasicTable title="Asset list" subtitle="List of all assets and their current value" headers={headers} rows={data} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Nvd3Chart;
