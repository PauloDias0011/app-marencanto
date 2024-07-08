import React, { useEffect, useState } from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { fetchAllUsers } from '../../../utility/fetchUsers';

type User = {
  id: number;
  email: string;
};

type UserSelectProps = {
  control: Control<any>;
  errors: Record<string, FieldError>;
};

const UserSelect: React.FC<UserSelectProps> = ({ control, errors }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
    };
    getUsers();
  }, []);

  return (
    <Controller
      control={control}
      name="userId"
      rules={{ required: "This field is required" }}
      defaultValue={null}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={users}
          getOptionLabel={(item) => {
            return users.find((user) => user.id === item.id)?.email ?? "";
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_, value) => {
            field.onChange(value ? value.id : null);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="User"
              margin="normal"
              variant="outlined"
              error={!!errors?.userId}
              helperText={errors?.userId?.message}
              required
            />
          )}
        />
      )}
    />
  );
};

export default UserSelect;
