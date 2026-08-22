import api from './api';

const REST_API_BASE_URL = '/api/taches';

//Connection du GetAll
export const listTache = () => api.get(REST_API_BASE_URL);

//Connection de la CREATIONTache(POST)
export const createTache = (tache :any) => api.post(REST_API_BASE_URL, tache);

//Connection du Get(ID)
export const getTache = (tacheId : any) => api.get(REST_API_BASE_URL + '/' + tacheId);

//Connection du Get(matiere_Id)
export const getTachesByMatiere = (matiereId : any) => {
    return api.get(`${REST_API_BASE_URL}/matieres/${matiereId}`);
};

//Connection du Delete
export const deleteTache = (tacheId : any) => api.delete(REST_API_BASE_URL + '/' + tacheId);
