import axios from 'axios';

const REST_API_BASE_URL = '/api/classes';

//Connection du GetAll
export const listClasses = () => axios.get(REST_API_BASE_URL);

//Connection de la CREATIONCLASSES(POST)
export const createClasses = (classes: any) => axios.post(REST_API_BASE_URL, classes);

//Connection du Get(ID)
export const getClasses = (classesId: any) => axios.get(REST_API_BASE_URL + '/' +  classesId);

//conection du PUT(updateclasses)
export const updateClasses = (classesId : any, classes : any) => axios.put(REST_API_BASE_URL + '/' + classesId, classes);

//Connection du Delete
export const deleteClasses = (classeId : any) => axios.delete(REST_API_BASE_URL + '/' + classeId);