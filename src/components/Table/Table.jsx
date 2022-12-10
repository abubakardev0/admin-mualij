import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import "./Table.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Email</th>
            <th className="tableHeader">Phone</th>
            <th className="tableHeader">Date</th>
            <th className="tableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className="tableRowItems" key={el.id}>
              <td className="tableCell">{el.name} 23423423423434234</td>
              <td className="tableCell">{el.email ?? ""}</td>
              <td className="tableCell">{el.phone ?? ""}</td>
              <td className="tableCell">{el.date ?? ""}</td>
              <td className="tableCell">
                <div className="table_actions">
                  <button className="table_actions_accept">A</button>
                  <button className="table_actions_reject">R</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
