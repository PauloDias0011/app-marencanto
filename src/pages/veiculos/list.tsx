import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const VeiculoList = () => {
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "id",
                headerName: "Id",
                minWidth: 50,
            },
            {
                field: "placa",
                flex: 1,
                headerName: "Placa",
                minWidth: 200,
            },
            {
                field: "data_compra",
                flex: 1,
                headerName: "Data Compra",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "valor_veiculo",
                flex: 1,
                headerName: "Valor Veiculo",
                type: "number",
                minWidth: 200,
            },
            {
                field: "fornecedor",
                flex: 1,
                headerName: "Fornecedor",
                minWidth: 200,
            },
            {
                field: "modelo",
                flex: 1,
                headerName: "Modelo",
                minWidth: 200,
            },
            {
                field: "renavam",
                flex: 1,
                headerName: "Renavam",
                type: "number",
                minWidth: 200,
            },
            {
                field: "quilometragem",
                flex: 1,
                headerName: "Quilometragem",
                type: "number",
                minWidth: 200,
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                            <DeleteButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
