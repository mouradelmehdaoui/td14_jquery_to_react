import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import SearchBar from "../../components/Search/SearchBar";

/**
 * Table component displays a paginated and sortable table with global search functionality.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.data - Array of data to be displayed in the table.
 * @param {Array} props.columns - Array of column configurations for the table.
 * @returns {JSX.Element} React component
 */
const Table = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
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

  const {pageIndex, pageSize } = state;

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <SearchBar onSearch={(value) => setGlobalFilter(value || undefined)} />
      </div>
      <div className="container body-table">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
              <table>{/* ... (your table body and header code) */}</table>
              <div className="d-flex align-items-baseline justify-content-center">
                <div className="d-flex align-items-baseline px-2">
                  <label>Show</label>
                  <select
                    className="form-control form-control-sm"
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[10, 25, 50, 100].map((pageSizeOption) => (
                      <option key={pageSizeOption} value={pageSizeOption}>
                        {pageSizeOption}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mb-0 px-2">
                  Showing {pageIndex * pageSize + 1} to{" "}
                  {Math.min((pageIndex + 1) * pageSize, data.length)} of{" "}
                  {data.length} entries
                </p>
                <button className="btn btn-outline-dark px-1" onClick={previousPage} disabled={!canPreviousPage}>
                  Previous Page
                </button>
                <button className="btn btn-outline-dark" onClick={nextPage} disabled={!canNextPage}>
                  Next Page
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      </div>
    </div>
  );
};

export default Table;
