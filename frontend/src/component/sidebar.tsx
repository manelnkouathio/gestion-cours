import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Dock } from 'lucide-react';
import { University } from 'lucide-react';
import { House } from 'lucide-react';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { listClasses } from '../services/ClassesService';

const Sidebar = () => {

/*-------------------------------------------------------------------------------------PARTIE LOGIQUE-----------------------------------------------------------------*/

    //Variable permettant la navigation de page
    const navigator = useNavigate();

    //fonction de navigation vers la listeclasses(acceuil)
    function Navigate() {
        navigator('/listeclasses')
    }

    //fonction de navigation vers la page setting
    function Navigate2() {
        navigator('/setting')
    }

    //function de navigation vers la page Documentation
    function Navigate3() {
        navigator('/Documentation')
    }

    //fonction de navigation vers les classes
    function Navigate4(id : any) {
        navigator(`/gestionclasses/${id}`)
    }


    //Donnée sur les classes modifiables
    const [classes, setClasses] = useState([])

    //mettre a jour automatiquement la page
    useEffect(() => {
        listClasses().then((response) => {
            setClasses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

/*-----------------------------------------------------------------------------------------------DESIGN GRAPHIQUE-----------------------------------------------------------------*/

    return (
    <nav className='fixed shadow-md h-screen w-54 '>

        {/*Nom De l'entreprise */}
        <div className=" p-4 flex justify-between border-b">
            <div className='pt-2'><Users /></div>
            <div className=' flex text-3xl font-bold  text-accent mr-20 ' >NKM</div>
        </div>

        {/*Différent widget de navigate*/}
        <div className="p-5">
            <div onClick={Navigate} className=" cursor-pointer flex text-xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none hover:text-info"><House /><span className="ml-1">Acceuil</span></div>
            <div onClick={Navigate2} className=" cursor-pointer flex pt-6 text-xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none hover:text-info"><Settings /><span className="ml-1">Setting</span></div>
            <div onClick={Navigate3} className=" cursor-pointer flex pt-6 text-xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-safe:hover:transform-none hover:text-info"><Dock /><span className="ml-1">Documentation</span></div>
        </div>


        {/*Gestion des différentes classes */}
                <div className="text-center text-primary text-3xl mb-5 pb-2 pt-4 border-b flex">
                    <div className='pt-2 pr-3 pl-2 text-neutral'><University /></div>CLASSES
                </div>
            {

                classes.map(({name, id}) =>  <li key={name} onClick={() => Navigate4(id)}  className=" cursor-pointer transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  text-center px2 py-2  hover:bg-base-300 hover:text-info">
                    <p className="text-xl">{name}</p>
                </li> )

            }
    </nav>

    )
}

export default Sidebar