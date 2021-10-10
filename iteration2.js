


isApproved(alumns);

function isApproved(alumns) {
    for (const alumn of alumns) {
        let isApproved = false;
        if((alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3)) {
            isApproved = true;
            alumn.isApproved = isApproved;
        } else {
            alumn.isApproved = isApproved;
        }
        console.log(`${alumn.name}, ¿Ha aprobado? ${alumn.isApproved}`);
    }
}