import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class TaskUpdate {
    @timestamp
    execute(id: string, ...newTitleParts: string[]) {
        if (!id || newTitleParts.length === 0) {
            console.log("Usage : task:update <id> <nouveau titre>");
            return;
        }

        const newTitle = newTitleParts.join(" ");

        const data = storage.load();
        const task = data.tasks.find(t => t.id === id);

        if (!task) {
            console.log("Tâche introuvable.");
            return;
        }

        task.title = newTitle;
        task.updatedAt = new Date().toISOString();

        storage.save(data);

        console.log("Tâche mise à jour :", id);
    }
}

export default TaskUpdate;
