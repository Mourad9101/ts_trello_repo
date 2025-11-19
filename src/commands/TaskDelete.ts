import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class TaskDelete {
    @timestamp
    execute(id: string) {
        if (!id) {
            console.log("Usage : task:delete <id>");
            return;
        }

        const data = storage.load();
        const before = data.tasks.length;

        data.tasks = data.tasks.filter((t) => t.id !== id);

        if (before === data.tasks.length) {
            console.log("Tâche introuvable.");
            return;
        }

        storage.save(data);
        console.log("Tâche supprimée :", id);
    }
}

export default TaskDelete;
