import {ChevronLeft, CirclePlus, Trash2} from 'lucide-react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {deleteMatieres, getMatieresByClasse} from "../services/MatiereService.ts";

const ListeUes = () => {

/*---------------------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Donnée sur les classes modifiables
    const [matieres, setMatieres] = useState([])

    //Variable permettant la recuperation de l'ID de la page
    const {id} = useParams();

    //Modifier automatique les effects de la page
    useEffect(() => {
        getMatieres()
    }, [])

    //fonction pour recuperer automatiquement toutes les Ues
    function getMatieres(){
        getMatieresByClasse(id).then((response) => {
            setMatieres(response.data)
        }).catch(error => {
            console.error(error)
        });

    }

    //fonction de suppresion des matieres
    function removeMatieres(mid : any){
        console.log(mid);

        deleteMatieres(mid).then(() => {
            getMatieres()
            navigator('/listeUEs/' + id)
        }).catch(error => {
            console.error(error);
        })
    }

    //variable permettant la navigation sur les differentes pages
    const navigator = useNavigate();

    //fonction de navigation sur AjouterUes
    function Navigate() {
        navigator('/ajouterUEs/' + id)
    }

    //fonction de navigation sur gestionUes
    function Navigate2(mid: any) {
        navigator(`/gestionUEs/${mid}`)
    }

    //fonction de retour
    function retour(){
        navigator('/gestionclasses/' + id)
    }

/*-----------------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return(
        <div>

            {/*Bouton Retour*/}
            <div className="flex justify-start ml-54">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

        <div className="ml-54 mt-13">

            {/*Titre de la page*/}
            <h1 className=" flex text-4xl justify-center m-10 underline font-mono font-bold mb-20">GERER VOS <span className="text-accent"> UEs</span></h1>

            <h2 className=" flex mr-35 text-3xl text-primary mb-3 justify-evenly italic"> Listes de vos UEs <button onClick={Navigate} className="shadow-lg flex btn btn-primary transform transition hover:-translate-x-1 motion-reduce:transition-none motion-safe:hover:transform-none"><CirclePlus />
                Ajouter</button></h2>

            {/*Table de gestion des matieres*/}
            <table className="w-2/3 justify-center ml-55 table table-striped table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UEs</th>
                        <th>crédit</th>
                    </tr>
                </thead>
                <tbody>
                {/*Differentes Matieres */}
                {
                    matieres.map(({credit, mid, name}) =>

                        <tr key={mid} onClick={() => Navigate2(mid)} className="cursor-pointer text-lg hover:text-info  hover:bg-base-300 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none">
                            <td>{mid}</td>
                            <td>{name}</td>
                            <td>{credit}</td>
                            <td><button className="btn btn-error w-2/3 h-10 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none" onClick={() => removeMatieres(mid)} ><Trash2 /></button></td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
        </div>

    )
}

export default ListeUes;