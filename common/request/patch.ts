import { axiosConfig } from "./axiosConfig";


interface Prams<T> {
  token?: string;
  url: string;
  data?: T
}

export const patch = async <P , R = any>({
  url,
  token,
  data
}: Prams<P>): Promise<R> => {
  const result = await axiosConfig.patch<R>(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
