import request from '../utils/request';

const PAGE_SIZE = 5;



export function query(condition) {

  const settings = {
    method: 'POST',
    headers:{
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify(condition)
  };

  const {page, pagesize = PAGE_SIZE} = condition;
  const url = `/api/users?_page=${page}&_limit=${PAGE_SIZE}`;
  
  return request(url, settings);
}
