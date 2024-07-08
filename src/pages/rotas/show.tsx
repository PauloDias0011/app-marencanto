import { useShow, useOne } from "@refinedev/core";
import {
    Show,
    TextFieldComponent as TextField,
    DateField,
    NumberField,
    BooleanField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const RotaShow = () => {
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
                    Data
                </Typography>
                <DateField value={record?.data} />
                <Typography variant="body1" fontWeight="bold">
                    Veiculo
                </Typography>

                {veiculoIsLoading ? (
                    <>Loading...</>
                ) : (
                    <>{veiculoData?.data?.placa}</>

                )}
                <Typography variant="body1" fontWeight="bold">
                    Horario Saida
                </Typography>
                <TextField value={record?.horario_saida} />
                <Typography variant="body1" fontWeight="bold">
                    Quilometragem Saida
                </Typography>
                <NumberField value={record?.quilometragem_saida ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Combustivel Saida
                </Typography>
                <NumberField value={record?.combustivel_saida ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Carro Limpo Ao Sair
                </Typography>
                <BooleanField value={record?.carro_limpo_ao_sair} />
                <Typography variant="body1" fontWeight="bold">
                    Horario Chegada
                </Typography>
                <TextField value={record?.horario_chegada} />
                <Typography variant="body1" fontWeight="bold">
                    Combustivel Chegada
                </Typography>
                <NumberField value={record?.combustivel_chegada ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Quilometragem Chegada
                </Typography>
                <NumberField value={record?.quilometragem_chegada ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Turno
                </Typography>
                <TextField value={record?.turno} />
            </Stack>
        </Show>
    );
};
