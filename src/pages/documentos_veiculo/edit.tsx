import { Edit, useAutocomplete } from "@refinedev/mui";
import { Box, TextField, Autocomplete } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const DocumentosVeiculoEdit = () => {
    const {
        saveButtonProps,
        refineCore: { queryResult },
        register,
        control,
        formState: { errors },
    } = useForm();

    const documentosVeiculoData = queryResult?.data?.data;

    const { autocompleteProps: veiculoAutocompleteProps } = useAutocomplete({
        resource: "veiculos",
        defaultValue: documentosVeiculoData?.veiculo_id,
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("id", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.id}
                    helperText={(errors as any)?.id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Id"
                    name="id"
                    disabled
                />
                <TextField
                    {...register("categoria", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.categoria}
                    helperText={(errors as any)?.categoria?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Categoria"
                    name="categoria"
                />
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("data_vencimento", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.data_vencimento}
                    helperText={(errors as any)?.data_vencimento?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Data Vencimento"
                    name="data_vencimento"
                />
                <Controller
                    control={control}
                    name="veiculo_id"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    disabled={true}
                    render={({ field }) => (
                        <Autocomplete
                            {...veiculoAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    veiculoAutocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            (item?.id ?? item)?.toString(),
                                    )?.placa ?? ""
                                );
                            }}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                option?.id?.toString() ===
                                    (value?.id ?? value)?.toString()
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Veiculo"
                                    margin="normal"
                                    variant="outlined"
                                    error={!!(errors as any)?.veiculo_id}
                                    helperText={
                                        (errors as any)?.veiculo_id?.message
                                    }
                                    required
                                />
                
                            )}
                        />
                    )}
                />
            </Box>
        </Edit>
    );
};
