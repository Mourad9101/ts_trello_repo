import fs from "fs";
import path from "path";
import { Task } from "../models/Task";
import { Board } from "../models/Board";

export interface DataFile {
    tasks: Task[];
    boards: Board[];
}

const filePath = path.join(__dirname, "../../data.json");

function load(): DataFile {
    if (!fs.existsSync(filePath)) {
        return { tasks: [], boards: [] };
    }

    try {
        const content = fs.readFileSync(filePath, "utf8");
        return JSON.parse(content);
    } catch (err) {
        console.log("Erreur de lecture du fichier :", err);
        return { tasks: [], boards: [] };
    }
}

function save(data: DataFile): void {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.log("Erreur de sauvegarde :", err);
    }
}

export const storage = { load, save };
