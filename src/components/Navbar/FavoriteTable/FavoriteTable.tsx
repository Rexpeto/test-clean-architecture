import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const FavoriteTable = () => {
  const statePeople = useSelector((store: AppStore) => store.favorites);

  const columns = [
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
