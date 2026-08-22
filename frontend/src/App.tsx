import Sidebar from './component/sidebar.tsx'
import Navbar from './component/navbar.tsx'
import Listeclasses from "./component/listeclasses.tsx";
import Ajouterclasses from "./component/ajouterclasses.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gestionclasses from "./component/gestionclasses.tsx";
import Calculmoyenne from "./component/calculmoyenne.tsx";
import Modifierclasses from "./component/modifierclasses.tsx";
import Setting from "./component/setting.tsx";
import ListeUes from "./component/listeUes.tsx";
import AjouterUes from "./component/ajouterUes.tsx";
import GestionUes from "./component/gestionUes.tsx";
import Documentation from "./component/documentation.tsx";
import ModifierUes from "./component/modifierUes.tsx";
import GenerateurPdf from "./component/notescours.tsx";
import ListeTaches from "./component/listestaches.tsx";
import AjouterTaches from "./component/ajoutertaches.tsx";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Sidebar/>
            <Navbar/>
            <Routes>
                {/* http://localhost:5173/*/}
                <Route path="/" element={  <Listeclasses/>}></Route>
                {/* http://localhost:5173/listeclasses*/}
                <Route path="/listeclasses" element={  <Listeclasses/>}></Route>
                {/* http://localhost:5173/listeUEs*/}
                <Route path="/listeUEs/:id" element={  <ListeUes/>}></Route>
                {/* http://localhost:5173/listetaches*/}
                <Route path="/listetaches/:mid" element={  <ListeTaches/>}></Route>
                {/* http://localhost:5173/ajouterclasses*/}
                <Route path="/ajouterclasses" element={  <Ajouterclasses/>}></Route>
                {/* http://localhost:5173/modifierclasses*/}
                <Route path="/modifierclasses/:id" element={  <Modifierclasses/>}></Route>
                {/* http://localhost:5173/gestionclasses*/}
                <Route path="/gestionclasses/:id" element={  <Gestionclasses/>}></Route>
                {/* http://localhost:5173/calculmoyenne*/}
                <Route path="/calculmoyenne/:id" element={  <Calculmoyenne/>}></Route>
                {/* http://localhost:5173/setting*/}
                <Route path="/setting" element={  <Setting/>}></Route>
                {/* http://localhost:5173/ajouterUEs*/}
                <Route path="/ajouterUEs/:id" element={  <AjouterUes/>}></Route>
                {/* http://localhost:5173/ajouterTaches*/}
                <Route path="/ajoutertaches/:mid" element={  <AjouterTaches/>}></Route>
                {/* http://localhost:5173/gestionUEs*/}
                <Route path="/gestionUEs/:mid" element={  <GestionUes/>}></Route>
                {/* http://localhost:5173/documentation*/}
                <Route path="/Documentation" element={  <Documentation/>}></Route>
                {/* http://localhost:5173/modifierUEs*/}
                <Route path="/modifierUEs/:mid" element={  <ModifierUes/>}></Route>
                {/* http://localhost:5173/notescours*/}
                <Route path="/notescours/:mid" element={  <GenerateurPdf/>}></Route>
            </Routes>

        </BrowserRouter>

    </div>
  )
}

export default App
