import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class BoardDelete {
    @timestamp
    execute(args: string[]) {
        const id = args[0];

        if (!id) {
            console.log("Usage : board:delete <id>");
            return;
        }

        const data = storage.load();
        const updatedBoards = data.boards.filter((b) => b.id !== id);

        if (updatedBoards.length === data.boards.length) {
            console.log("Board introuvable.");
            return;
        }

        data.boards = updatedBoards;
        storage.save(data);

        console.log("Board supprimé :", id);
    }
}

export default BoardDelete;
