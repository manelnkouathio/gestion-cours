import { Container } from 'lucide-react';
import { CircleUser } from 'lucide-react';

const Navbar = () => {

    /*Constante pour la Navbar, modifiable dans profile*/
    const Name_user = [
        {
            "name" : "Nkouathio Manel"
        }
    ]

    /*Corps du component NAvbar*/
    return(


        <div className="flex ml-54 bg-base-300 justify-center items-center w-103/120 py-2 rounded-xl shadow-xl">

            {/*Titre de l'application*/}
            <div className="flex text-2xl font-bold italic px-2 justify-between items-center">
                <span className="m-1"><Container/></span>GEST<span className="text-accent">APP</span>
            </div>

            {/*Nom du User*/}
            <div className="flex items-center justify-end w-9/12 ml-10  py-1 text-2xl italic">
                <div className="text-accent mr-3"><CircleUser /></div>
                {
                    Name_user.map((user) => <div key={user.name} className="text-shadow-lg">{user.name}</div>)
                }
            </div>

        </div>
    )
}

export default Navbar

