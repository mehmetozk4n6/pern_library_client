import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, selectBooks, selectStatus } from "../redux/librarySlice";
import DataTable from "react-data-table-component";

function Table() {
  const dispatch = useDispatch();
  const loading = useSelector(selectStatus) === "loading" ? true : false;
  const books = useSelector(selectBooks).books;
  const totalRows = useSelector(selectBooks).totalBooks;

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
      selector: (row) => row.category.name,
    },
    {
      name: "author",
      selector: (row) => row.author,
    },
    {
      name: "publisher",
      selector: (row) => row.publisher.company,
    },
  ];

  const data = books?.map(
    ({ title, description, category, author, publisher }) => {
      return {
        title,
        description,
        category: category,
        author: `${author.first_name} ${author.last_name}`,
        publisher: publisher,
      };
    }
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Box sx={{ width: "75%", margin: 0, padding: "auto" }}>
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
      />
    </Box>
  );
}

export default Table;
