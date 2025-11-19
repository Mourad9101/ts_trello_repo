import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs";
import { storage } from "../utils/storage";
import type { DataFile } from "../utils/storage";

vi.mock("fs");

describe("storage", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    //  TEST load() — fichier absent
    it("load() retourne des tableaux vides si le fichier n'existe pas", () => {
        vi.spyOn(fs, "existsSync").mockReturnValue(false);

        const result = storage.load();

        const expected: DataFile = { tasks: [], boards: [] };
        expect(result).toEqual(expected);
        expect(fs.readFileSync).not.toHaveBeenCalled();
    });

    // TEST load() — fichier présent
    it("load() lit et retourne le contenu JSON du fichier", () => {
        const fakeData: DataFile = {
            tasks: [
                {
                    id: "1",
                    title: "Test",
                    status: "todo",
                    createdAt: "",
                    updatedAt: "",
                    boardId: undefined
                }
            ],
            boards: []
        };

        vi.spyOn(fs, "existsSync").mockReturnValue(true);
        vi.spyOn(fs, "readFileSync").mockReturnValue(JSON.stringify(fakeData));

        const result = storage.load();

        expect(result).toEqual(fakeData);
        expect(fs.readFileSync).toHaveBeenCalledOnce();
    });

    // TEST load() — erreur JSON
    it("load() retourne des tableaux vides si le JSON est invalide", () => {
        vi.spyOn(fs, "existsSync").mockReturnValue(true);
        vi.spyOn(fs, "readFileSync").mockImplementation(() => {
            throw new Error("JSON invalide");
        });

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        const result = storage.load();

        const expected: DataFile = { tasks: [], boards: [] };
        expect(result).toEqual(expected);
        expect(log).toHaveBeenCalled();
    });

    // TEST save() — succès
    it("save() écrit correctement les données dans le fichier", () => {
        const fakeWrite = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

        const data: DataFile = {
            tasks: [
                {
                    id: "1",
                    title: "OK",
                    status: "todo",
                    createdAt: "",
                    updatedAt: "",
                    boardId: undefined
                }
            ],
            boards: []
        };

        storage.save(data);

        expect(fakeWrite).toHaveBeenCalledOnce();
        expect(fakeWrite.mock.calls[0][1]).toContain('"title": "OK"');
    });

    // TEST save() — erreur écriture
    it("save() log une erreur si l'écriture échoue", () => {
        vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
            throw new Error("Erreur écriture");
        });

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        storage.save({ tasks: [], boards: [] });

        expect(log).toHaveBeenCalled();
    });
});
