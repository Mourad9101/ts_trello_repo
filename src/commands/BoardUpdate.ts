import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class BoardUpdate {
    @timestamp
    execute(args: string[]) {
        const id = args[0];
        const newName = args.slice(1).join(" ");

        if (!id || !newName.trim()) {
            console.log("Usage : board:update <id> <nouveau nom>");
            return;
        }

        const data = storage.load();
        const board = data.boards.find((b) => b.id === id);

        if (!board) {
            console.log("Board introuvable.");
            return;
        }

        board.name = newName;

        storage.save(data);

        console.log("Board mis à jour :", newName);
    }
}

export default BoardUpdate;
