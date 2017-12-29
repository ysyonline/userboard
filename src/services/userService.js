import request from '../utils/request';

const PAGE_SIZE = 5;

export function query({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
