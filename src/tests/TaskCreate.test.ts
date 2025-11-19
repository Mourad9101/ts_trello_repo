import { describe, it, expect, vi } from "vitest";
import type { Task } from "../models/Task";

const mockData: { tasks: Task[]; boards: any[] } = {
    tasks: [],
    boards: []
};

vi.mock("../utils/storage", () => ({
    storage: {
        load: () => mockData,
        save: (data: any) => {
            mockData.tasks = data.tasks;
            mockData.boards = data.boards;
        }
    }
}));

import TaskCreate from "../commands/TaskCreate";

describe("TaskCreate", () => {
    it("crée une tâche avec le bon titre", () => {
        mockData.tasks = [];

        const cmd = new TaskCreate();
        cmd.execute("Ma tâche test");

        expect(mockData.tasks.length).toBe(1);
        expect(mockData.tasks[0].title).toBe("Ma tâche test");
        expect(mockData.tasks[0].status).toBe("todo");
    });
});
