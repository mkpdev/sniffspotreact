import axios from 'axios';

const request = async (method, variables, anotherURL) => {
  
return axios({
    method: method,
    url: anotherURL,
    headers: {'Content-Type': 'multipart/form-data'},
    data: variables
  });
};

export default class CallApi {
  getDashboardData() {
    return request('GET', {}, "https://sniffspot.onrender.com/");
  }

  postSpot(data) {
    return request('POST',data,"https://sniffspot.onrender.com/spots")
  }
}
