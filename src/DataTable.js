import React from 'react';

function DataTable({ columns, data }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} className="data-cell">
                {JSON.stringify(item[column], null, 2)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
