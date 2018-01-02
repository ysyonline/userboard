import queryString from 'query-string';
import { routerRedux } from 'dva/router';


//验证字符串是否是数字
export function checkNumber(str) {
  var reg = /^[0-9]+.?[0-9]*$/;
  return reg.test(str);
}

export function search4Obj (search) {
	const queryObj = queryString.parse(search.replace(/^[?]*(.*)$/, '$1'));
	for(const key in queryObj){
		if(checkNumber(queryObj[key])){
			queryObj[key] = Number(queryObj[key])
		}
	}
	return queryObj;
}

export function obj4Search (query) {
	return queryString.stringify(query);
}

export function routerAction(location){
	debugger;
	const {pathname, search, query} = location;
    const _location = {pathname};
    if(search){
    	let _search = obj4Search(search);
		_location.search = `?${_search}`;
    }
    if(query){
    	_location.query = query;
    }


    return routerRedux.push(_location);
}