import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBooks,
  selectBooks,
  selectSearchText,
  selectStatus,
} from "../redux/librarySlice";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";
import { selectOrder } from "../redux/librarySlice";

function Table() {
  const dispatch = useDispatch();
  const loading = useSelector(selectStatus) === "loading" ? true : false;
  const books = useSelector(selectBooks).books;
  const pages = useSelector(selectBooks).pages;
  const currentPage = useSelector(selectBooks).current;
  const totalBooks = useSelector(selectBooks).totalBooks;
  const searchText = useSelector(selectSearchText);
  const order = useSelector(selectOrder);

  useEffect(() => {
    dispatch(getBooks({ page: 1, searchText, order }));
  }, [dispatch, searchText, order]);

  const columns = [
    {
      name: "title",
      selector: (row) => row.title,
    },
    {
      name: "description",
      selector: (row) => row.description,
    },
    {
      name: "category",
      selector: (row) => row.category?.name || null,
    },
    {
      name: "author",
      selector: (row) => row.author,
    },
    {
      name: "publisher",
      selector: (row) => row.publisher?.company || null,
    },
  ];

  const data = books?.map(
    ({ title, description, category, author, publisher }) => {
      return {
        title,
        description,
        category: category,
        author:
          (author?.first_name &&
            `${author?.first_name} ${author?.last_name}`) ||
          null,
        publisher,
      };
    }
  );

  const handlePageChange = (page) => {
    dispatch(getBooks({ page, searchText, order }));
  };

  const paginationComponentOptions = {
    noRowsPerPage: true,
  };

  return (
    <Box sx={{ width: "75%", margin: 0, padding: "auto" }}>
      <DataTable
        paginationComponentOptions={paginationComponentOptions}
        columns={columns}
        data={data}
        progressPending={loading}
        responsive
        pagination
        paginationServer
        paginationTotalRows={totalBooks}
        paginationPerPage={5}
        onChangePage={handlePageChange}
      />
    </Box>
  );
}

export default Table;
