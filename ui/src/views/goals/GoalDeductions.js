import React from 'react';
import BasicTable from '../../components/Table/BasicTable';

const headers = ["Goal", "Investment", "Deducted amount", "Year of deduction"]
const data = [
  ["Health contiengency - Parents", "₹ 5,00,000", "₹ 7,01,275", "2025"],
  ["Health contiengency - Parents", "₹ 5,00,000", "₹ 7,01,275", "2025"]
]


const BootstrapTable = () => {
  return (
    <BasicTable title="Deductions" subtitle="Deductions made from investments to achieve goals" headers={headers} rows={data} />
  );
};

export default BootstrapTable;
