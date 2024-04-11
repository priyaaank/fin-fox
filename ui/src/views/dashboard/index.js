import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

const dashSalesData = [
  { title: 'Daily Sales', amount: '$249.95', icon: 'icon-arrow-up text-c-green', value: 50, class: 'progress-c-theme' },
  { title: 'Monthly Sales', amount: '$2.942.32', icon: 'icon-arrow-down text-c-red', value: 36, class: 'progress-c-theme2' },
  { title: 'Yearly Sales', amount: '$8.638.32', icon: 'icon-arrow-up text-c-green', value: 70, color: 'progress-c-theme' }
];

const DashDefault = () => {
  return (
    <React.Fragment>
      <Row>
      <Col md={6} xl={4}>
          <Card className="card-social">
            <Card.Body className="border-bottom">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <i className="fa fa-money-bill text-primary f-36" />
                </div>
                <div className="col text-end">
                  <h3>₹ 40,30,97,988</h3>
                  <h5 className="text-c-green mb-0">
                    <span className="text-muted">Total corpus needed</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className="row align-items-center justify-content-center card-active">
                <div className="col-6">
                  <h6 className="text-center m-b-10">
                    <span className="text-muted m-r-5">Achieved:</span>
                    <br/>₹ 16,05,41,956
                  </h6>
                </div>
                <div className="col-6">
                  <h6 className="text-center  m-b-10">
                    <span className="text-muted m-r-5">Remaining duration:</span>
                    <br/>230 mths
                  </h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col  md={6} xl={4}>
          <Card className="card-social">
            <Card.Body className="border-bottom">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <i className="fa fa-chart-line text-success f-36" />
                </div>
                <div className="col text-end">
                  <h3>₹ 3,53,351</h3>
                  <h5 className="text-c-green mb-0">
                    <span className="text-muted">Monthly savings needed</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className="row align-items-center justify-content-center card-active">
                <div className="col-6">
                  <h6 className="text-center m-b-10">
                    <span className="text-muted m-r-5">Overall XIRR:</span>
                    <br/>9.34%
                  </h6>
                </div>
                <div className="col-6">
                  <h6 className="text-center  m-b-10">
                    <span className="text-muted m-r-5">Avg growth (YoY):</span>
                    <br/>45%
                  </h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col  md={6} xl={4}>
          <Card className="card-social">
            <Card.Body className="border-bottom">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <i className="fa fa-stop-circle text-danger f-36" />
                </div>
                <div className="col text-end">
                  <h3>Savings shortfall</h3>
                  <h5 className="text-c-green mb-0">
                    <span className="text-muted">Current projection</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className="row align-items-center justify-content-center card-active">
                <div className="col-6">
                  <h6 className="text-center m-b-10">
                    <span className="text-muted m-r-5">With contributions:</span>
                    <br/>₹ 23,05,41,956
                  </h6>
                </div>
                <div className="col-6">
                  <h6 className="text-center  m-b-10">
                    <span className="text-muted m-r-5">Without contributions:</span>
                    <br/>₹ 18,05,41,956
                  </h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={6}>
          <Card className="user-list">
            <Card.Header>
              <Card.Title as="h5">Goals summary</Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
              <thead>
                  <tr>
                    <th></th>
                    <th>Goal</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="unread">
                    <td>
                      <i className="fa fa-stop-circle text-success f-36" />
                    </td>
                    <td>
                      <h6 className="mb-1">Sara education</h6>
                      <p className="m-0">Fund higher education for Sara</p>
                    </td>
                    <td>
                      <h6 className="text-muted float-right">
                        2044
                      </h6>
                    </td>
                    <td>
                    <i className="fa fa-circle text-c-green f-10 m-r-15 float-left" />
                    </td>
                    <td>
                      <label className="label theme-bg2 text-white f-14 f-w-400 float-middle">90%</label>
                    </td>
                  </tr>
                  <tr className="read">
                    <td>
                      <i className="fa fa-stop-circle text-success f-36" />
                    </td>
                    <td>
                      <h6 className="mb-1">Arsh education</h6>
                      <p className="m-0">Fund higher education for Arsh</p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        2044
                      </h6>
                    </td>
                    <td>
                      <i className="fa fa-circle text-c-red f-10 m-r-15" />
                    </td>
                    <td>
                      <div className="col-auto">
                        <label className="label theme-bg2 text-white f-14 f-w-400 float-middle">20%</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={6}>
          <Card className="user-list">
            <Card.Header>
              <Card.Title as="h5">Investment summary</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Investment</th>
                    <th>Current Amt</th>
                    <th>Perf</th>
                    <th>XIRR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa fa-stop-circle text-success f-36" />
                    </td>
                    <td>
                      <h6 className="mb-1">PPF</h6>
                    </td>
                    <td>
                      <span className="pie_1">₹  7,45,432</span>
                    </td>
                    <td>
                      <i className="fa fa-circle text-c-red f-10 m-r-15" />
                    </td>
                    <td>
                      <h6 className="m-0">7.35%</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-stop-circle text-success f-36" />
                    </td>
                    <td>
                      <h6 className="mb-1">EPF</h6>
                    </td>
                    <td>
                      <span className="pie_1">₹  79,45,432</span>
                    </td>
                    <td>
                      <i className="fa fa-circle text-c-red f-10 m-r-15" />
                    </td>
                    <td>
                      <h6 className="m-0">7.35%</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashDefault;
