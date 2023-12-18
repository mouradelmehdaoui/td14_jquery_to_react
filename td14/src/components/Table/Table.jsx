// components/Table.js
import React from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import  SearchBar  from '../../components/Search/SearchBar';

const Table = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize, // Add this line
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Set initial page index to 0
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">

        <SearchBar
            onSearch={(value) => setGlobalFilter(value || undefined)}
          />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length} className="text-center">
              Showing{" "}
              {pageIndex * pageSize + 1} to{" "}
              {Math.min((pageIndex + 1) * pageSize, data.length)} of{" "}
              {data.length} entries
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-3 text-center d-flex">
      <span>
          <label>Show</label>
          <select
            className="form-control form-control-sm"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>
        <p className="mb-0">
          Showing{" "}
          {pageIndex * pageSize + 1} to{" "}
          {Math.min((pageIndex + 1) * pageSize, data.length)} of{" "}
          {data.length} entries
        </p>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
      

    </div>
  );
};

export default Table;
