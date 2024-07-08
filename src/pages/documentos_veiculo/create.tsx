import { Create, useAutocomplete } from "@refinedev/mui";
import { Box, TextField, Autocomplete, Stack, Input, Typography } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from "react";
import axios from "axios";
import { type HttpError, useApiUrl } from "@refinedev/core";



export const DocumentosVeiculoCreate: React.FC = () => {
    const [isUploadLoading, setIsUploadLoading] = useState(false);
    const apiUrl = useApiUrl();

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

    const onChangeHandler = async (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        try {
          setIsUploadLoading(true);
    
          const formData = new FormData();
    
          const target = event.target;
          const file: File = (target.files as FileList)[0];
    
          formData.append("file", file);
    
          const res = await axios.post<{ url: string }>(
            `${apiUrl}/media/uploads`,
            formData,
            {
              withCredentials: false,
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            },
          );
    
          const { name, size, type, lastModified } = file;
    
          const filePaylod = [
            {
              name,
              size,
              type,
              lastModified,
              url: res.data.url,
            },
          ];
    
          setValue("filepath", filePaylod, { shouldValidate: true });
    
          setIsUploadLoading(false);
        } catch (error) {
          setError("filepath", { message: "Falho no upload. Tente novamente" });
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
                    // eslint-disable-next-line
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
                            {errors.images && (
                                <Typography variant="caption" color="#fa541c">
                                    {errors.images?.message?.toString()}
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
function setIsUploadLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}

