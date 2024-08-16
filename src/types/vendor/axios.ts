import { Method } from "axios";

export type AxiosParams = {
  method?: Method;
  url: string;
  data?: any;
  params?: any;
};