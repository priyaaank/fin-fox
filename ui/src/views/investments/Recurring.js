import React from 'react';
import BasicTable from '../../components/Table/BasicTable';

const headers = ["#", "Investment name", "Annual / Monthly", "Amount", "Annual increment", "Comments"]
const data = [
  [1, "PF", "Annual", "₹ 20,000", "5%", "NA"],
  [2, "NPS", "Annual", "₹ 50,000", "5%", "NA"],
  [3, "Sukanya Samriddhi", "Annual", "₹ 25,000", "0%", "NA"],
  [4, "Priyank PPF", "Annual", "₹ 25,000", "0%", "NA"],
  [5, "Sara PPF", "Annual", "₹ 25,000", "0%", "NA"]
]

const BootstrapTable = () => {
  return (
      <BasicTable title="Recurring" subtitle="Recurring monthly investments to account in overall plan" headers={headers} rows={data} />
  );
};

export default BootstrapTable;
