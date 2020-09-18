import axios from 'axios';
import { routes } from 'api/apiRoutes';

class API {
  failedResponse = (error: any): Promise<any> => {
    const data = error.response && error.response.data ? error.response.data : {};
    return Promise.reject(data);
  };

  fetch = (route: string) => {
    return axios.get(route).catch(error => {
      return this.failedResponse(error);
    });
  };

  fetchUsers = () => {
    return this.fetch(routes.fetchUsers);
  };
}

export default new API();
