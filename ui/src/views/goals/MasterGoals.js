import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

const BootstrapTable = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Goals</Card.Title>
              <span className="d-block m-t-5"> 
                Planned goals and their progress
              </span>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Goal</th>
                    <th>Current target amount</th>
                    <th>Assumed inflation</th>
                    <th>Effective amount</th>
                    <th>Amount yet to achieve</th>
                    <th>Target year</th>
                    <th>Req monthly savings</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-success">
                    <th scope="row">1</th>
                    <td>Health contiengency - Parents</td>
                    <td>₹ 5,00,000</td>
                    <td>7%</td>
                    <td>₹ 7,01,275</td>
                    <td>₹ 0</td>
                    <td>2025</td>
                    <td>₹ 0</td>
                    <td>Achieved</td>
                  </tr>
                  <tr class="table-success">
                    <th scope="row">2</th>
                    <td>Child education</td>
                    <td>₹ 60,00,000</td>
                    <td>8%</td>
                    <td>₹ 16,317,742</td>
                    <td>₹ 0</td>
                    <td>2033</td>
                    <td>₹ 0</td>
                    <td>Achieved</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Child Marriage</td>
                    <td>₹ 5000000</td>
                    <td>6%</td>
                    <td>₹ 20,244,673</td>
                    <td>₹ 14,707,673</td>
                    <td>2044</td>
                    <td>₹ 26,782</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Retirement corpus</td>
                    <td>₹ 40000000</td>
                    <td>8%</td>
                    <td>₹ 319,522,458</td>
                    <td>₹ ₹206,509,264</td>
                    <td>2047</td>
                    <td>₹ 282,610</td>
                    <td>In Progress</td>
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

export default BootstrapTable;
