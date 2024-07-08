import { useShow, useOne } from "@refinedev/core";
import {
    Show,
    TextFieldComponent as TextField,
    DateField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const DocumentosVeiculoShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: veiculoData, isLoading: veiculoIsLoading } = useOne({
        resource: "veiculos",
        id: record?.veiculo_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Id
                </Typography>
                <TextField value={record?.id} />
                <Typography variant="body1" fontWeight="bold">
                    Categoria
                </Typography>
                <TextField value={record?.categoria} />
                <Typography variant="body1" fontWeight="bold">
                    Data Vencimento
                </Typography>
                <DateField value={record?.data_vencimento} />
                <Typography variant="body1" fontWeight="bold">
                    Veiculo
                </Typography>

                {veiculoIsLoading ? (
                    <>Loading...</>
                ) : (
                    <>{veiculoData?.data?.placa}</>

                )}
            </Stack>
        </Show>
    );
};
