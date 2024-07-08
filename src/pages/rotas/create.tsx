import { Create, useAutocomplete } from "@refinedev/mui";
import {
    Box,
    TextField,
    Autocomplete,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const RotaCreate = () => {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
    } = useForm();

    const { autocompleteProps: veiculoAutocompleteProps } = useAutocomplete({
        resource: "veiculos",
        
    });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("data", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.data}
                    helperText={(errors as any)?.data?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    label="Data"
                    name="data"
                />
                <Controller
                    control={control}
                    name="veiculo_id"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...veiculoAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value?.id ?? value);
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
                <TextField
                    {...register("horario_saida", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.horario_saida}
                    helperText={(errors as any)?.horario_saida?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Horario Saida"
                    name="horario_saida"
                />
                <TextField
                    {...register("quilometragem_saida", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.quilometragem_saida}
                    helperText={(errors as any)?.quilometragem_saida?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Quilometragem Saida"
                    name="quilometragem_saida"
                />
                <TextField
                    {...register("combustivel_saida", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.combustivel_saida}
                    helperText={(errors as any)?.combustivel_saida?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Combustivel Saida"
                    name="combustivel_saida"
                />
                <Controller
                    control={control}
                    name="carro_limpo_ao_sair"
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <FormControlLabel
                            label="Carro Limpo Ao Sair"
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(event) => {
                                        field.onChange(event.target.checked);
                                    }}
                                />
                            }
                        />
                    )}
                />
                <TextField
                    {...register("horario_chegada", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.horario_chegada}
                    helperText={(errors as any)?.horario_chegada?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Horario Chegada"
                    name="horario_chegada"
                />
                <TextField
                    {...register("combustivel_chegada", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.combustivel_chegada}
                    helperText={(errors as any)?.combustivel_chegada?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Combustivel Chegada"
                    name="combustivel_chegada"
                />
                <TextField
                    {...register("quilometragem_chegada", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.quilometragem_chegada}
                    helperText={(errors as any)?.quilometragem_chegada?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Quilometragem Chegada"
                    name="quilometragem_chegada"
                />
                <TextField
                    {...register("turno", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.turno}
                    helperText={(errors as any)?.turno?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Turno"
                    name="turno"
                />
            </Box>
        </Create>
    );
};
