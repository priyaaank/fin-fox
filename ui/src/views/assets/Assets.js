import React from 'react';
import { Row, Col, Card, Collapse } from 'react-bootstrap';

import PieDonutChart from '../charts/nvd3-chart/chart/PieDonutChart';
import BasicTable from '../../components/Table/BasicTable';

const totalAssets = { title: 'Total assets', amount: '₹ 2,03,03,400', icon: 'icon-database text-c-green', value: 100, class: 'progress-c-theme' };  
const assetGrowth = { title: 'Change since last year', amount: '-20%', icon: 'icon-arrow-down text-c-red', value: 100, class: 'progress-c-theme' };  
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


const Nvd3Chart = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Donut Chart</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieDonutChart data={datum} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
            <Card>
                <Card.Body>
                    <h6 className="mb-4">{totalAssets.title}</h6>
                    <div className="row d-flex align-items-center">
                    <div className="col-9">
                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className={`feather ${totalAssets.icon} f-30 m-r-5`} /> {totalAssets.amount}
                        </h3>
                    </div>
                    <div className="col-3 text-end">
                        <p className="m-b-0">{totalAssets.value}%</p>
                    </div>
                    </div>
                    <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                        className={`progress-bar ${totalAssets.class}`}
                        role="progressbar"
                        style={{ width: `${totalAssets.value}%` }}
                        aria-valuenow={totalAssets.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    />
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h6 className="mb-4">{assetGrowth.title}</h6>
                    <div className="row d-flex align-items-center">
                    <div className="col-9">
                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className={`feather ${assetGrowth.icon} f-30 m-r-5`} /> {assetGrowth.amount}
                        </h3>
                    </div>
                    <div className="col-3 text-end">
                        <p className="m-b-0">{assetGrowth.value}%</p>
                    </div>
                    </div>
                    <div className="progress m-t-30" style={{ height: '7px' }}>
                    <div
                        className={`progress-bar ${assetGrowth.class}`}
                        role="progressbar"
                        style={{ width: `${assetGrowth.value}%` }}
                        aria-valuenow={assetGrowth.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    />
                    </div>
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
