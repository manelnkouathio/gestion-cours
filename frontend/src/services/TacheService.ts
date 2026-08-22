import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/taches';

//Connection du GetAll
export const listTache = () => axios.get(REST_API_BASE_URL);

//Connection de la CREATIONTache(POST)
export const createTache = (tache :any) => axios.post(REST_API_BASE_URL, tache);

//Connection du Get(ID)
export const getTache = (tacheId : any) => axios.get(REST_API_BASE_URL + '/' + tacheId);

//Connection du Get(matiere_Id)
export const getTachesByMatiere = (matiereId : any) => {
    return axios.get(`${REST_API_BASE_URL}/matieres/${matiereId}`);
};

//Connection du Delete
export const deleteTache = (tacheId : any) => axios.delete(REST_API_BASE_URL + '/' + tacheId);