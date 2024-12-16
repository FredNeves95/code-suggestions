import { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown): string => {
  console.log('Erro aqui: ', error);
  if (error instanceof AxiosError && error.response?.data?.message) {
    return error.response?.data?.message;
  }

  if (error instanceof Error && error?.message) {
    return error.message;
  }

  return 'Unknown error.';
};