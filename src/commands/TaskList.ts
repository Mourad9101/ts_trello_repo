import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";

class TaskList {
    @timestamp
    execute() {
        const data = storage.load();

        if (data.tasks.length === 0) {
            console.log("Aucune tâche trouvée.");
            return;
        }

        console.log("Liste des tâches :");

        data.tasks.forEach((t) => {
            console.log(`[${t.status}] ${t.id} - ${t.title}`);
        });
    }
}

export default TaskList;
