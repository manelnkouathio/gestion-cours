import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/matieres';

//Connection du GetAll
export const listMatieres = () => axios.get(REST_API_BASE_URL);

//Connection de la CREATIONMatiere(POST)
export const createMatiere = (matiere :any) => axios.post(REST_API_BASE_URL, matiere);

//Connection du Get(ID)
export const getMatieres = (matiereId : any) => axios.get(REST_API_BASE_URL + '/' + matiereId);

//conection du PUT(updateclasses)
export const updateMatiere = (matiereId : any, matiere : any) => axios.put(REST_API_BASE_URL + '/' + matiereId, matiere);

//Connection du Get(classes_Id)
export const getMatieresByClasse = (classesId : any) => {
    return axios.get(`${REST_API_BASE_URL}/classes/${classesId}`);
};

//Connection du Delete
export const deleteMatieres = (matiereId : any) => axios.delete(REST_API_BASE_URL + '/' + matiereId);