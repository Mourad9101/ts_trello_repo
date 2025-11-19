import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";
import { validate } from "../utils/validate";
import { randomUUID } from "crypto";
import { Board } from "../models/Board";

class BoardCreate {
    @timestamp
    @validate
    execute(args: string[]) {
        const [name] = args;
        const data = storage.load();

        const newBoard: Board = {
            id: randomUUID(),
            name,
            createdAt: new Date().toISOString(),
        };

        data.boards.push(newBoard);
        storage.save(data);

        console.log("Board créé :", newBoard.name);
    }
}

export default BoardCreate;