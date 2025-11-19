import { describe, it, expect, vi } from "vitest";
import { validate } from "../utils/validate";

describe("validate decorator", () => {

    it("affiche une erreur si le premier argument est vide", () => {
        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        class TestClass {
            @validate
            run(value: string) {
                return "OK";
            }
        }

        const obj = new TestClass();
        const result = obj.run("");

        expect(result).toBeUndefined();

        expect(log).toHaveBeenCalledWith("Erreur : ce champ est obligatoire.");

        log.mockRestore();
    });

    it("exécute la méthode si l'argument est valide", () => {
        class TestClass {
            @validate
            run(value: string) {
                return "OK:" + value;
            }
        }

        const obj = new TestClass();
        const result = obj.run("Bonjour");

        expect(result).toBe("OK:Bonjour");
    });
});
