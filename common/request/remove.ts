import { axiosConfig } from "./axiosConfig";


interface Prams<T> {
  token?: string;
  url: string;
  data?: T
}

export const remove = async <P , R = any>({
  url,
  token,
  data
}: Prams<P>): Promise<R> => {
  const result = await axiosConfig.delete<R>(url,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
