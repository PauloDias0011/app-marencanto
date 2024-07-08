import { Create } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const ContratoCreate = () => {
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
                    {...register("nome", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.nome}
                    helperText={(errors as any)?.nome?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Nome"
                    name="nome"
                />
                <TextField
                    {...register("empresa_cliente", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.empresa_cliente}
                    helperText={(errors as any)?.empresa_cliente?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Empresa Cliente"
                    name="empresa_cliente"
                />
            </Box>
        </Create>
    );
};
