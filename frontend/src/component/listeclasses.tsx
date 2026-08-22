import { CirclePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {deleteClasses, listClasses} from '../services/ClassesService';
import { Trash2 } from 'lucide-react';

const Listeclasses = () => {

/*-----------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Donnée sur les classes modifiables
    const [classes, setClasses] = useState([])

    //Modifier automatique les effects de la page
    useEffect(() => {
        getAllMatiere()
    }, [])

    //fonction pour recuperer automatiquement toutes les matieres
    function getAllMatiere() {
        listClasses().then((response) => {
            setClasses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    //variable permettant la navigation sur les differentes pages
    const navigator = useNavigate();

    //function de navigation sur ajouter les classes
    function Navigate() {
        navigator('/ajouterclasses')
    }

    //fonction de navigation sur la page de gestion de classes
    // @ts-ignore
    function Navigate2(id) {
        navigator(`/gestionclasses/${id}`)
    }

    //fonction de suppresion des classes
    function removeClasses(id : any){
        console.log(id);

        deleteClasses(id).then(() => {
            getAllMatiere()
            navigator('/listeclasses')
        }).catch(error => {
            console.error(error);
        })
    }

/*------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/


    return(
        <div className="ml-54 mt-25">

            {/*Titre de l'application*/}
            <h1 className=" flex text-4xl justify-center m-10 underline font-mono font-bold mb-20">Bienvenu sur GEST<span className="text-accent ">APP</span></h1>

            <h2 className=" flex mr-35 text-3xl text-primary mb-3 justify-evenly italic"> Listes de vos classes <button onClick={Navigate} className="shadow-lg flex btn btn-primary transform transition hover:-translate-x-1 motion-reduce:transition-none motion-safe:hover:transform-none"><CirclePlus />
                Ajouter</button></h2>


            {/*Tableau des classes*/}
            <table className="w-2/3 justify-center ml-55 table table-striped table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Classes</th>
                        <th>Année</th>
                    </tr>
                </thead>
                <tbody>

                {/*Differentes classes*/}
                {
                    classes.map(({date, id, name}) =>

                        <tr key={id} onClick={() => Navigate2(id)} className="cursor-pointer text-lg hover:text-info  hover:bg-base-300 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none">
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{date}</td>
                            <td><button className="btn btn-error w-2/3 h-10 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none" onClick={() => removeClasses(id)} ><Trash2 /></button></td>
                        </tr>)
                }

                </tbody>
            </table>
        </div>
    )
}

export default Listeclasses;