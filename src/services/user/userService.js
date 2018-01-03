import request from '../../utils/request';

const PAGE_SIZE = 5;



export function query(condition) {

  const settings = {
    method: 'POST',
    headers:{
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify(condition)
  };

  const {current, pagesize = PAGE_SIZE} = condition;
  const url = `/api/users?_page=${current}&_limit=${PAGE_SIZE}`;
  
  return request(url, settings);
}

export function update(condition){

  const {id, values} = condition;

  const settings = {
    method: 'UPDATE',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  };
  const url = `/api/users?id=${id}`;
  return request(url, settings);
}

export function put(condition){

  const settings = {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(condition)
  };
  const url = `/api/users`;
  return request(url, settings);
}