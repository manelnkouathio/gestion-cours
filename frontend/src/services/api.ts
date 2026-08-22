import axios from 'axios';

/**
 * Récupère l'identifiant unique de cet appareil/navigateur, ou en génère un
 * nouveau s'il n'existe pas encore, et le stocke dans localStorage pour
 * qu'il persiste entre les visites.
 *
 * Limite connue : si l'utilisateur vide son cache, utilise la navigation
 * privée, ou change de navigateur, un nouvel identifiant sera généré et
 * les anciennes données créées ne seront plus visibles (mais restent en
 * base). Ce n'est pas un système d'authentification sécurisé.
 */
function getOrCreateDeviceId(): string {
    const STORAGE_KEY = 'device_id';
    let deviceId = localStorage.getItem(STORAGE_KEY);

    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, deviceId);
    }

    return deviceId;
}

// Instance axios unique utilisée par tous les services (ClassesService,
// MatiereService, TacheService) pour que chaque requête envoie automatiquement
// l'identifiant d'appareil dans un en-tête HTTP, sans avoir à le répéter partout.
const api = axios.create();

api.interceptors.request.use((config) => {
    config.headers['X-Device-Id'] = getOrCreateDeviceId();
    return config;
});

export default api;
