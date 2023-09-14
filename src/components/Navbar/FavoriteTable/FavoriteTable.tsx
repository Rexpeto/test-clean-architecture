import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { Person } from "@/models";
import { removeFavorite } from "@/redux/slices";

const FavoriteTable = () => {
  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
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
        <IconButton
          color="primary"
          aria-label="delete"
          component="label"
          onClick={() => handleClick(params.row)}
        >
          <DeleteOutline />
        </IconButton>
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

export default FavoriteTable;
