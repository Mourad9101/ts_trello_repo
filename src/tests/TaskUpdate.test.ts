import { describe, it, expect, vi } from "vitest";
import TaskUpdate from "../commands/TaskUpdate";
import { storage } from "../utils/storage";
import type { Task } from "../models/Task";
import type { Board } from "../models/Board";

describe("TaskUpdate", () => {
    it("met à jour le titre d'une tâche existante", () => {
        const mockData: { tasks: Task[]; boards: Board[] } = {
            tasks: [
                {
                    id: "1",
                    title: "Ancien titre",
                    status: "todo",
                    createdAt: "",
                    updatedAt: ""
                }
            ],
            boards: []
        };

        vi.spyOn(storage, "load").mockReturnValue(mockData);
        vi.spyOn(storage, "save").mockImplementation(() => {});

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        const cmd = new TaskUpdate();
        cmd.execute("1", "Nouveau", "titre");

        const realLog = log.mock.calls[1];

        expect(realLog).toEqual([
            "Tâche mise à jour :",
            "1"
        ]);

        log.mockRestore();
    });
});
