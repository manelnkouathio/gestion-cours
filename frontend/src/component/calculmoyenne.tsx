import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getMatieresByClasse } from "../services/MatiereService.ts";

interface Matiere {
    id: number;
    name: string;
    credit: number;
    noteCc: number | string;
    noteSn: number | string;
}

const Calculmoyenne = () => {


    const { id } = useParams<{ id: string }>();
    const [matieres, setMatieres] = useState<Matiere[]>([]);
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getMatieres();
        }
    }, [id]);

    function getMatieres() {
        getMatieresByClasse(id)
            .then((response) => {
                const dataFormatted: Matiere[] = response.data.map((item: any) => ({
                    id: item.id || item.mid,
                    name: item.name,
                    credit: item.credit,
                    noteCc: "",
                    noteSn: ""
                }));
                setMatieres(dataFormatted);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des matières :", error);
            });
    }

    const handleNoteChange = (id: number, field: "noteCc" | "noteSn", value: string) => {
        setMatieres((prevMatieres) =>
            prevMatieres.map((matiere) =>
                matiere.id === id ? { ...matiere, [field]: value } : matiere
            )
        );
    };

    const calculateNoteFinale = (noteCc: number | string, noteSn: number | string): number | null => {
        const cc = parseFloat(noteCc as string);
        const sn = parseFloat(noteSn as string);

        if (isNaN(cc) || isNaN(sn)) return null;
        return sn * 0.6 + cc * 0.4;
    };

    // Calcul de la MGP individuelle selon le barème
    const getMGP = (note: number): number => {
        if (note >= 18) return 4.0;
        if (note >= 16) return 3.7;
        if (note >= 14) return 3.3;
        if (note >= 13) return 3.0;
        if (note >= 12) return 2.7;
        if (note >= 11) return 2.3;
        if (note >= 10) return 2.0;
        if (note >= 9) return 1.7;
        if (note >= 8) return 1.3;
        if (note >= 6) return 1.0;
        return 0.0;
    };

    const totalCredits = matieres.reduce((acc, m) => acc + (m.credit || 0), 0);

    // Calcul de la Moyenne Générale (pondérée par les crédits)
    const calculateMoyenneGenerale = () => {
        let pointsTotaux = 0;
        let creditsSaisis = 0;

        matieres.forEach((m) => {
            const noteFinale = calculateNoteFinale(m.noteCc, m.noteSn);
            if (noteFinale !== null) {
                pointsTotaux += noteFinale * m.credit;
                creditsSaisis += m.credit;
            }
        });

        if (creditsSaisis === 0) return "-";
        return (pointsTotaux / creditsSaisis).toFixed(2);
    };

    // Calcul de la MGP Globale (moyenne des MGP pondérée par les crédits)
    const calculateMpgGenerale = () => {
        let mgpTotalePonderee = 0;
        let creditsSaisis = 0;

        matieres.forEach((m) => {
            const noteFinale = calculateNoteFinale(m.noteCc, m.noteSn);
            if (noteFinale !== null) {
                const mgp = getMGP(noteFinale);
                mgpTotalePonderee += mgp * m.credit;
                creditsSaisis += m.credit;
            }
        });

        if (creditsSaisis === 0) return "-";
        return (mgpTotalePonderee / creditsSaisis).toFixed(2);
    };

    function retour() {
        navigator('/gestionclasses/' + id);
    }

    return (
        <div className="ml-54">
            <div className="flex justify-start">
                <button
                    onClick={retour}
                    className="font-bold italic btn btn-secondary bg-red-600 w-1/12 m-2 ml-8 text-md h-12 transform transition hover:-translate-x-2 motion-reduce:transition-none motion-safe:hover:transform-none"
                >
                    <ChevronLeft /> RETOUR
                </button>
            </div>

            <h1 className="py-6 flex justify-center text-3xl font-semibold text-shadow-lg text-primary">
                Calcul de la moyenne
            </h1>

            <table className="w-2/3 justify-center ml-50 table table-striped table-bordered mt-15">
                <thead>
                <tr className="text-xl italic text-info">
                    <th>Name</th>
                    <th>Credit</th>
                    <th>Note CC</th>
                    <th>Note SN</th>
                    <th>Note finale</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {matieres.map((matiere) => {
                    const noteFinale = calculateNoteFinale(matiere.noteCc, matiere.noteSn);
                    const mgp = noteFinale !== null ? getMGP(noteFinale) : null;

                    return (
                        <tr key={matiere.id} className="cursor-pointer text-lg hover:bg-base-300">
                            <td>{matiere.name}</td>
                            <td>{matiere.credit}</td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="note de cc"
                                    className="w-25 input input-bordered"
                                    value={matiere.noteCc}
                                    onChange={(e) => handleNoteChange(matiere.id, "noteCc", e.target.value)}
                                />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="note de Sn"
                                    className="w-25 input input-bordered"
                                    value={matiere.noteSn}
                                    onChange={(e) => handleNoteChange(matiere.id, "noteSn", e.target.value)}
                                />
                            </td>

                            <td>
                                {noteFinale !== null ? noteFinale.toFixed(2) : "-"}
                            </td>

                            {/* Colonne Status mise à jour avec MGP */}
                            <td>
                                {noteFinale !== null ? (
                                    <div className="flex flex-col">
                                            <span>
                                                {noteFinale >= 10 ? (
                                                    <span className="text-success font-bold">Validé</span>
                                                ) : (
                                                    <span className="text-error font-bold">Non Validé</span>
                                                )}
                                            </span>
                                        <span className="text-sm font-semibold opacity-80">
                                                MGP : {mgp?.toFixed(1)} / 4.0
                                            </span>
                                    </div>
                                ) : (
                                    "-"
                                )}
                            </td>
                        </tr>
                    );
                })}

                {/* Ligne de résumé réorganisée */}
                <tr className="text-xl italic text-warning font-bold bg-base-200">
                    <td>Total :</td>
                    <td>{totalCredits} cr.</td>
                    <td></td>
                    <td></td>
                    {/* Moyenne sous la Note finale */}
                    <td>
                        Moyenne : {calculateMoyenneGenerale()} / 20
                    </td>
                    {/* MGP Globale sous le Status */}
                    <td>
                        MGP : {calculateMpgGenerale()} / 4.0
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calculmoyenne;