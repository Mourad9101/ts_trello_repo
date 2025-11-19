import { describe, it, expect, vi } from "vitest";
import type { Task } from "../models/Task";

const mockData: { tasks: Task[]; boards: any[] } = {
    tasks: [],
    boards: []
};

vi.mock("../utils/storage", () => ({
    storage: {
        load: () => mockData,
        save: () => {}
    }
}));

import TaskList from "../commands/TaskList";

describe("TaskList", () => {
    it("affiche correctement les tâches", () => {
        mockData.tasks = [
            { id: "1", title: "Test 1", status: "todo", createdAt: "now" },
            { id: "2", title: "Test 2", status: "done", createdAt: "now" }
        ];

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        new TaskList().execute();

        expect(log).toHaveBeenCalledWith("Liste des tâches :");
        expect(log).toHaveBeenCalledWith("[todo] 1 - Test 1");
        expect(log).toHaveBeenCalledWith("[done] 2 - Test 2");

        log.mockRestore();
    });

    it("affiche un message si aucune tâche", () => {
        mockData.tasks = [];

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        new TaskList().execute();

        expect(log).toHaveBeenCalledWith("Aucune tâche trouvée.");

        log.mockRestore();
    });
});
