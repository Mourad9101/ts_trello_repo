import { storage } from "../utils/storage";
import { timestamp } from "../utils/timestamp";
import { validate } from "../utils/validate";
import { randomUUID } from "crypto";
import { Task } from "../models/Task";

class TaskCreate {
    @validate
    @timestamp
    execute(...args: string[]) {
        const [title, boardId] = args;

        const data = storage.load();

        const newTask: Task = {
            id: randomUUID(),
            title,
            status: "todo",
            boardId,
            createdAt: new Date().toISOString(),
        };

        data.tasks.push(newTask);
        storage.save(data);

        console.log("Tâche créée :", newTask.title);
    }
}

export default TaskCreate;
