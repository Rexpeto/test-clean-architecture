import { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { AppStore } from "@/redux/store";
import { addFavorite } from "@/redux/slices";

const PeopleTable = () => {
  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.people);

  const [selectPeople, setSelectPeople] = useState<Person[]>([]);

  const findPerson = (person: Person) =>
    !!selectPeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    selectPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectPeople, person];

    dispatch(addFavorite(filteredPeople));

    setSelectPeople(filteredPeople);
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
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div>{params.row.levelOfHappiness}</div>
      ),
    },
  ];

  return (
    <DataGrid
      rows={statePeople}
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

export default PeopleTable;
