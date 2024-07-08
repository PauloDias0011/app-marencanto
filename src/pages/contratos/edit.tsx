import { Edit } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const ContratoEdit = () => {
    const {
        saveButtonProps,
        refineCore: { queryResult },
        register,
        control,
        formState: { errors },
    } = useForm();

    const contratosData = queryResult?.data?.data;

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
        </Edit>
    );
};
