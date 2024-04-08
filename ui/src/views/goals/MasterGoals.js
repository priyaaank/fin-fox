import React from 'react';
import BasicTable from '../../components/Table/BasicTable';

const headers = ["#", "Goal", "Current target amount", "Assumed inflation", "Effective amount", "Amount yet to achieve", "Target year", "Req monthly savings", "Comments"]
const data = [
  [1, "Health contiengency - Parents", "₹ 5,00,000", "7%", "₹ 7,01,275", "₹ 0", "2025", "₹ 0", "Achieved"],
  [2, "Child education", "₹ 60,00,000", "8%", "₹ 16,317,742", "₹ 0", "2033", "₹ 0", "Achieved"],
  [3, "Child Marriage", "₹ 5000000", "6%", "₹ 20,244,673", "₹ 14,707,673", "2044", "₹ 26,782", "In Progress"],
  [4, "Retirement corpus", "₹ 40000000", "8%", "₹ 319,522,458", "₹ ₹206,509,264", "2047", "₹ 282,610", "In Progress"]
]

const BootstrapTable = () => {
  return (
      <BasicTable title="Deductions" subtitle="Deductions made from investments to achieve goals" headers={headers} rows={data} />
  );
};

export default BootstrapTable;
