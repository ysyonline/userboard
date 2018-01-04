
import request from '../../utils/request';

const PAGE_SIZE = 5;



export function authenticate(condition) {

  const settings = {
    method: 'POST',
    headers:{
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify(condition)
  };
  const url = `/api/auth`;
  return request(url, settings);

}