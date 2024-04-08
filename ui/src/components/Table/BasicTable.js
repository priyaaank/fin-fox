import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';


const BasicTable = ({ title, subtitle, headers, rows }) => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{title}</Card.Title>
                            <span className="d-block m-t-5"> 
                                {subtitle}
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        {headers.map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            {row.map((cell, index) => (
                                                <td key={index}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicTable;