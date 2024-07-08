import { useShow } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const ContratoShow = () => {
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
                    Nome
                </Typography>
                <TextField value={record?.nome} />
                <Typography variant="body1" fontWeight="bold">
                    Empresa Cliente
                </Typography>
                <TextField value={record?.empresa_cliente} />
            </Stack>
        </Show>
    );
};
