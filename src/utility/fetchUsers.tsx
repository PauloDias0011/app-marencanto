import { supabaseClient } from "./supabaseClient";

export const fetchAllUsers = async () => {
    const { data, error } = await supabaseClient.from('auth.users').select('*');
    if (error) {
      console.error('Erro ao buscar usuários:', error);
      return [];
    }

    console.log(data);
    return data;
};