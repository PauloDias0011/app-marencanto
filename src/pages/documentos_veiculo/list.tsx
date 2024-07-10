import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    DateField,
    FileField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";

export const DocumentosVeiculoList = () => {
    const { dataGridProps } = useDataGrid();

    const { data: veiculoData, isLoading: veiculoIsLoading } = useMany({
        resource: "veiculos",
        ids: dataGridProps?.rows?.map((item: any) => item?.veiculo_id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const { data: categoriaData, isLoading: categoriaIsLoading } = useMany({
        resource: "categorias",
        ids: dataGridProps?.rows?.map((item: any) => item?.categorias_id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const columns = React.useMemo<GridColDef[]>(
        () => [

            {
                field: "data_vencimento",
                flex: 1,
                headerName: "Data Vencimento",
                minWidth: 250,
                renderCell: function RenderDateCell({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "veiculo_id",
                flex: 1,
                headerName: "Veiculo",
                minWidth: 300,
                renderCell: function RenderVeiculoCell({ value }) {
                    return veiculoIsLoading ? (
                        <>Carregando...</>
                    ) : (
                        veiculoData?.data?.find((item) => item.id === value)?.placa
                    );
                },
            },
            {
                field: "categorias_id",
                flex: 1,
                headerName: "Tipo do Documento",
                minWidth: 300,
                renderCell: function RenderCategoriaCell({ value }) {
                    return categoriaIsLoading ? (
                        <>Carregando...</>
                    ) : (
                        categoriaData?.data?.find((item) => item.id === value)?.nome
                    );
                },
            },
            {
                field: "filepath",
                flex: 1,
                headerName: "Arquivo",
                minWidth: 300,
                renderCell: function RenderFileCell({ row }) {            
                    let filepathArray;
                    try {
                        filepathArray = JSON.parse(row.filepath);
                    } catch (error) {
                        return null;
                    }
                    if (filepathArray && Array.isArray(filepathArray) && filepathArray.length > 0) {
                        const file = filepathArray[0];            
                        if (file && file.url) {
                            return (
                                <FileField 
                                src={"https://nddriileedipfwesgiaa.supabase.co/storage/v1/object/public/uploads/"+file.url}
                                title="Acessar Arquivo"
                                target="_blank" 
                                rel="noopener"
                                />
                            );
                        } 
                    } 
            
                    return null;
                },
            
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function RenderActionsCell({ row }) {
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
        [veiculoData?.data, categoriaData?.data]
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
