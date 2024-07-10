import { Create, useAutocomplete } from "@refinedev/mui";
import { Box, TextField, Autocomplete, Stack, Input, Typography } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { LoadingButton } from "@mui/lab";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from "react";
import { supabaseClient } from './../../utility/supabaseClient'; 
import { Controller } from "react-hook-form";

export const DocumentosVeiculoCreate: React.FC = () => {
    const [isUploadLoading, setIsUploadLoading] = useState(false);

    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
        setValue,
        setError,
        watch,
    } = useForm();
    const fileInput = watch("filepath");

    const { autocompleteProps: veiculoAutocompleteProps } = useAutocomplete({
        resource: "veiculos",
    });

    const { autocompleteProps: categoriaAutocompleteProps } = useAutocomplete({
        resource: "categorias",
    });

    const sanitizeFileName = (fileName: string) => {
        return fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    };

    const onChangeHandler = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        try {
            setIsUploadLoading(true);

            const target = event.target;
            const file: File = (target.files as FileList)[0];
            const sanitizedFileName = sanitizeFileName(file.name);

            // Use o cliente Supabase para fazer o upload do arquivo para o bucket
            const { data, error } = await supabaseClient.storage
                .from('uploads') // Substitua pelo nome do seu bucket
                .upload(`uploads/${sanitizedFileName}`, file);

            if (error) {
                throw error;
            }

            const { name, size, type, lastModified } = file;

            const filePayload = [
                {
                    name: sanitizedFileName,
                    size,
                    type,
                    lastModified,
                    url: data?.path, // Substitua 'data?.path' pela chave correta, se necessário
                },
            ];

            setValue("filepath", filePayload, { shouldValidate: true });

            setIsUploadLoading(false);
        } catch (error) {
            setError("filepath", { message: "Falha no upload. Tente novamente" });
            setIsUploadLoading(false);
        }
    };

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <Controller
                    control={control}
                    name="categorias_id"
                    rules={{ required: "This field is required" }}
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...categoriaAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value?.id ?? value);
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    categoriaAutocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            (item?.id ?? item)?.toString(),
                                    )?.nome ?? ""
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
                                    label="Tipo Documento"
                                    margin="normal"
                                    variant="outlined"
                                    error={!!(errors as any)?.categorias_id}
                                    helperText={
                                        (errors as any)?.categorias_id?.message
                                    }
                                    required
                                />
                            )}
                        />
                    )}
                />

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
                <Stack
                    direction="row"
                    gap={4}
                    flexWrap="wrap"
                    sx={{ marginTop: "16px" }}
                >
                    <>
                        <label htmlFor="filepath-input">
                            <Input
                                id="filepath-input"
                                type="file"
                                sx={{ display: "none" }}
                                onChange={onChangeHandler}
                            />
                            <input
                                id="file"
                                {...register("filepath", {
                                    required: "Campo Obrigatorio",
                                })}
                                type="hidden"
                            />
                            <LoadingButton
                                loading={isUploadLoading}
                                loadingPosition="end"
                                endIcon={<FileUploadIcon />}
                                variant="contained"
                                component="span"
                            >
                                Upload do Arquivo
                            </LoadingButton>
                            <br />
                            {errors.filepath && (
                                <Typography variant="caption" color="#fa541c">
                                    {errors.filepath?.message?.toString()}
                                </Typography>
                            )}
                        </label>
                        {fileInput && (
                            <Box
                                component="img"
                                sx={{
                                    maxWidth: 50,
                                    maxHeight: 50,
                                }}
                                src={""}
                            />
                        )}
                    </>
                </Stack>
            </Box>
        </Create>
    );
};
