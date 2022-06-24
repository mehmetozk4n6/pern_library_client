import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, selectBooks } from "../redux/librarySlice";
import DataTable from "react-data-table-component";

function Table() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  console.log(books);
  return (
    <Box sx={{ width: "75%", margin: 0, padding: "auto" }}>
      <DataTable columns={columns} data={data} />
    </Box>
  );
}

export default Table;
