import { ReqresUser } from '.';

export interface UsersResponse {
  data: ReqresUser[];
  total_pages: number;
}
