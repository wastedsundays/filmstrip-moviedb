export const API_KEY = 'e2be774394fd67e79142c1318cddcc84';
export const appTitle = 'FilmsTrip Movie DB by Adam H.';
export const appStorageName = 'FilmsTrip-favs-list';
export const appWatchStorageName = 'FilmsTrip-my-trip';

function getYear(){
    const d = new Date();
    return d.getFullYear();
}

export { getYear };
