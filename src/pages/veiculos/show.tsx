import { useShow } from "@refinedev/core";
import {
    Show,
    TextFieldComponent as TextField,
    DateField,
    NumberField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const VeiculoShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Id
                </Typography>
                <TextField value={record?.id} />
                <Typography variant="body1" fontWeight="bold">
                    Placa
                </Typography>
                <TextField value={record?.placa} />
                <Typography variant="body1" fontWeight="bold">
                    Data Compra
                </Typography>
                <DateField value={record?.data_compra} />
                <Typography variant="body1" fontWeight="bold">
                    Valor Veiculo
                </Typography>
                <NumberField value={record?.valor_veiculo ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Fornecedor
                </Typography>
                <TextField value={record?.fornecedor} />
                <Typography variant="body1" fontWeight="bold">
                    Modelo
                </Typography>
                <TextField value={record?.modelo} />
                <Typography variant="body1" fontWeight="bold">
                    Renavam
                </Typography>
                <NumberField value={record?.renavam ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Quilometragem
                </Typography>
                <NumberField value={record?.quilometragem ?? ""} />
            </Stack>
        </Show>
    );
};
