import { Create } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const VeiculoCreate = () => {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
    } = useForm();

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("placa", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.placa}
                    helperText={(errors as any)?.placa?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Placa"
                    name="placa"
                />
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("data_compra", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.data_compra}
                    helperText={(errors as any)?.data_compra?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Data Compra"
                    name="data_compra"
                />
                <TextField
                    {...register("valor_veiculo", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.valor_veiculo}
                    helperText={(errors as any)?.valor_veiculo?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Valor Veiculo"
                    name="valor_veiculo"
                />
                <TextField
                    {...register("fornecedor", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.fornecedor}
                    helperText={(errors as any)?.fornecedor?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Fornecedor"
                    name="fornecedor"
                />
                <TextField
                    {...register("modelo", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.modelo}
                    helperText={(errors as any)?.modelo?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Modelo"
                    name="modelo"
                />
                <TextField
                    {...register("renavam", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.renavam}
                    helperText={(errors as any)?.renavam?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Renavam"
                    name="renavam"
                />
                <TextField
                    {...register("quilometragem", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.quilometragem}
                    helperText={(errors as any)?.quilometragem?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Quilometragem"
                    name="quilometragem"
                />
            </Box>
        </Create>
    );
};
