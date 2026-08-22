const Documentation = () => {
    return (
        <div className="ml-54 font-mono">

            {/*Titre de la Page*/}
            <h1 className="text-5xl font-bold m-5 text-shadow-lg italic">Gest<span className="text-accent">APP</span></h1>

            <br/><hr/><br/>

            {/*Section d'information de cours*/}
            <div className="text-lg m-2">
                <p><span className="italic underline text-bold m-1">Auteur</span> : Nkouathio Sindji Yohan Manel</p>
                <p><span className="italic underline text-bold m-1">Entreprise</span> : NKM</p>
                <p><span className="italic underline text-bold m-1">Outils Frontend</span> : React.js + TailwindCSS + Daisy.ui + TypeScript + Lucide</p>
                <p><span className="italic underline text-bold m-1">Outils Backend</span> : Java(SpringBOOT)</p>
                <p><span className="italic underline text-bold m-1">Autres Outils</span> : Draw.io + Figma + Postman + Intellij + MySQLDatabase</p>
                <p><span className="italic underline text-bold m-1">AuteurVersion</span> : 1.0</p>
                <br/>
            </div>

            <hr/><br/>

            {/*Presentation du Projet*/}
            <p className="text-xl m-2"> Bienvenue sur GESTAPP, un projet personnel pour gérer ces cours plus simplement en departement, en automatisant la prise des notes, la gestion des devoirs et même le calcul de moyenne. Cette Application Web permet ainsi un temps considérable pouvant être allouer a une meilleur compréhension du cours.</p>

            <br/><hr/><br/>

            {/*Mode d'emploie */}
            <h2>Mode d'Emploi : </h2>
            <p>
                <ol>
                    <li>- Creer une Classe avec le button Ajouter</li>
                    <li>- Si vous souhaiter ajouter une UE, parter sur la liste de vous UE et cliquer sur Ajouter</li>
                    <li>- Vous pouvez ainsi faire toutes les modifications sur vos cours</li>
                </ol>
            </p>
        </div>
    )
}

export default Documentation