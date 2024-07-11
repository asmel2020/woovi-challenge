import { axiosConfig } from "./axiosConfig";

interface Parameter {
  token?: string;
  url: string;
}
export const get = async <T>({ url, token }: Parameter): Promise<T> => {
  const result = await axiosConfig.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
