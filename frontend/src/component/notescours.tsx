import React, {useEffect, useState} from "react";
import { jsPDF } from "jspdf";
import {ChevronLeft} from "lucide-react";
import {useNavigate, useParams} from "react-router-dom";
import {getMatieres} from "../services/MatiereService.ts";

const GenerateurPdf: React.FC = () => {

    const navigator = useNavigate();

    const {mid} = useParams();
    const [nomMatiere, setNomMatiere] = useState('');

    useEffect(() => {
        getMatieres(mid)
            .then((response) => {
                const nom = response.data.name;
                setNomMatiere(nom);
            }).catch((error) => {
            console.error("Erreur lors de la récupération de la matière :", error);
        });
    }, [mid]);

    function retour(){
        navigator('/gestionUEs/' + mid)
    }

    const [message, setMessage] = useState<string>("");

    const genererPDF = () => {
        if (!message.trim()) {
            alert("Veuillez saisir un message avant d'exporter en PDF.");
            return;
        }


        // 1. Création d'un nouveau document PDF (Format A4 par défaut)

        const doc = new jsPDF();

        const pageHeight = doc.internal.pageSize.getHeight();
        const marginTop = 45;
        const marginBottom = 20;
        const lineHeight = 8

        let currentY = marginTop;

        // 4. Ajout du message personnalisé avec gestion automatique des retours à la ligne
        doc.setFontSize(12);

        // splitTextToSize découpe le texte pour qu'il ne dépasse pas de la page (largeur max = 170mm)
        const texteDecoupe = doc.splitTextToSize(message, 170);

        texteDecoupe.forEach((decoupe : string) => {
            // Si la position dépasse la bas de la page (hauteur - marge du bas)
            if (currentY + lineHeight > pageHeight - marginBottom) {
                doc.addPage(); // 📄 Création d'une nouvelle page
                currentY = marginTop; // Réinitialisation de la position en haut de la nouvelle page
            }

        // Affichage du texte sous la ligne
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text(nomMatiere, 20, 20);

            // 3. Date du jour
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.text(`Pris le  : ${new Date().toLocaleDateString("fr-FR")}`, 20, 28);

            // Ligne de séparation
            doc.line(20, 32, 190, 32);

            // 4. Ajout du message personnalisé avec gestion automatique des retours à la ligne
            doc.setFontSize(12);

            doc.text(decoupe, 20, currentY);

            currentY += lineHeight;
        });

        // 5. Téléchargement du fichier
        doc.save(nomMatiere + ".pdf");
    };

    return (
        <div>
            <div className="flex justify-start ml-54">
                <button onClick={retour} className=" font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"><ChevronLeft/>RETOUR</button>
            </div>

        <div className=" ml-64 w-78/100 h-full m-6 p-6  rounded-xl shadow-md border border-gray-200">

            <h2 className="text-2xl font-bold mb-4 text-accent underline">
                Note de Cours
            </h2>

            {/* Champ de saisie (Textarea) */}
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-info mb-2">
                    Entrez le cours ici :
                </label>
                <textarea
                    id="message"
                    rows={17}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Écrivez le contenu du cours ici..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {/* Bouton de téléchargement */}
            <div className="flex justify-end">
                <button
                    onClick={genererPDF}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                    📄 Exporter en PDF
                </button>
            </div>
        </div>
        </div>
    );
};

export default GenerateurPdf;