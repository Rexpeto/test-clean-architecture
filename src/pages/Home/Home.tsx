import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { useState } from "react";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Home = () => {
  const [selectPeople, setSelectPeople] = useState<Person[]>([]);

  const findPerson = (person: Person) =>
    !!selectPeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    selectPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    setSelectPeople(
      findPerson(person) ? filterPerson(person) : [...selectPeople, person]
    );
  };

  const columns = [
    {
      field: "action",
      headerName: "",
      type: "actions",
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="small"
          checked={findPerson(params.row)}
          onChange={() => handleChange(params.row)}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div>{params.row.name}</div>
      ),
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div>{params.row.category}</div>
      ),
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div>{params.row.company}</div>
      ),
    },
  ];

  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[5, 10]}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      getRowId={(row) => row.id}
    />
  );
};

export default Home;
