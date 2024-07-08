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
import { useMany } from "@refinedev/core";
import { Checkbox } from "@mui/material";

export const RotaList = () => {
    const { dataGridProps } = useDataGrid();

    const { data: veiculoData, isLoading: veiculoIsLoading } = useMany({
        resource: "veiculos",
        ids: dataGridProps?.rows?.map((item: any) => item?.veiculo_id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "id",
                headerName: "Id",
                minWidth: 50,
            },
            {
                field: "data",
                flex: 1,
                headerName: "Data",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "veiculo_id",
                flex: 1,
                headerName: "Veiculo",
                minWidth: 300,
                renderCell: function render({ value }) {
                    return veiculoIsLoading ? (
                        <>Loading...</>
                    ) : (
                        veiculoData?.data?.find((item) => item.id === value)
                            ?.placa
                    );
                },
                
            },
            {
                field: "horario_saida",
                flex: 1,
                headerName: "Horario Saida",
                minWidth: 200,
            },
            {
                field: "quilometragem_saida",
                flex: 1,
                headerName: "Quilometragem Saida",
                type: "number",
                minWidth: 200,
            },
            {
                field: "combustivel_saida",
                flex: 1,
                headerName: "Combustivel Saida",
                type: "number",
                minWidth: 200,
            },
            {
                field: "carro_limpo_ao_sair",
                headerName: "Carro Limpo Ao Sair",
                minWidth: 100,
                renderCell: function render({ value }) {
                    return <Checkbox checked={!!value} />;
                },
            },
            {
                field: "horario_chegada",
                flex: 1,
                headerName: "Horario Chegada",
                minWidth: 200,
            },
            {
                field: "combustivel_chegada",
                flex: 1,
                headerName: "Combustivel Chegada",
                type: "number",
                minWidth: 200,
            },
            {
                field: "quilometragem_chegada",
                flex: 1,
                headerName: "Quilometragem Chegada",
                type: "number",
                minWidth: 200,
            },
            {
                field: "turno",
                flex: 1,
                headerName: "Turno",
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
        [veiculoData?.data],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
