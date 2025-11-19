import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class BoardList {
    @timestamp
    execute() {
        const data = storage.load();

        if (data.boards.length === 0) {
            console.log("Aucun board trouvé.");
            return;
        }

        console.log("Liste des boards :");

        data.boards.forEach((b) => {
            console.log(`${b.id} - ${b.name}`);
        });
    }
}

export default BoardList;
