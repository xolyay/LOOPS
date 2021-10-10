

const ids = [11, 40];

deleteId(ids, placesToTravel);

function deleteId(ids, placesToTravel) {
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        for (let x = 0; x < placesToTravel.length; x++) {
            const element = placesToTravel[x];
            if (id === element.id) {
                placesToTravel.splice(x,1);
            }
        }
    }
    console.log(`Lista de lugares tras eliminar ids: ${JSON.stringify(placesToTravel)}`);
}