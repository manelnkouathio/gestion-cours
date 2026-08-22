import api from './api';

const REST_API_BASE_URL = '/api/classes';

//Connection du GetAll
export const listClasses = () => api.get(REST_API_BASE_URL);

//Connection de la CREATIONCLASSES(POST)
export const createClasses = (classes: any) => api.post(REST_API_BASE_URL, classes);

//Connection du Get(ID)
export const getClasses = (classesId: any) => api.get(REST_API_BASE_URL + '/' +  classesId);

//conection du PUT(updateclasses)
export const updateClasses = (classesId : any, classes : any) => api.put(REST_API_BASE_URL + '/' + classesId, classes);

//Connection du Delete
export const deleteClasses = (classeId : any) => api.delete(REST_API_BASE_URL + '/' + classeId);