import api from './api';

const REST_API_BASE_URL = '/api/matieres';

//Connection du GetAll
export const listMatieres = () => api.get(REST_API_BASE_URL);

//Connection de la CREATIONMatiere(POST)
export const createMatiere = (matiere :any) => api.post(REST_API_BASE_URL, matiere);

//Connection du Get(ID)
export const getMatieres = (matiereId : any) => api.get(REST_API_BASE_URL + '/' + matiereId);

//conection du PUT(updateclasses)
export const updateMatiere = (matiereId : any, matiere : any) => api.put(REST_API_BASE_URL + '/' + matiereId, matiere);

//Connection du Get(classes_Id)
export const getMatieresByClasse = (classesId : any) => {
    return api.get(`${REST_API_BASE_URL}/classes/${classesId}`);
};

//Connection du Delete
export const deleteMatieres = (matiereId : any) => api.delete(REST_API_BASE_URL + '/' + matiereId);
