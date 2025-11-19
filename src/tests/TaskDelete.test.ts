import { describe, it, expect, vi } from "vitest";
import type { Task } from "../models/Task";

// Mock global
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

import TaskDelete from "../commands/TaskDelete";

describe("TaskDelete", () => {
    it("supprime une tâche existante", () => {
        mockData.tasks = [
            { id: "123", title: "Test", status: "todo", createdAt: "now" }
        ];

        const cmd = new TaskDelete();
        cmd.execute("123");

        expect(mockData.tasks.length).toBe(0);
    });

    it("ne modifie rien si l'id n'existe pas", () => {
        mockData.tasks = [
            { id: "abc", title: "Test", status: "todo", createdAt: "now" }
        ];

        const cmd = new TaskDelete();
        cmd.execute("999");

        expect(mockData.tasks.length).toBe(1); // rien supprimé
    });
});
