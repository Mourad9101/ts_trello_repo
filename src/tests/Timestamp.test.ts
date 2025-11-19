import { describe, it, expect, vi, beforeEach } from "vitest";
import { timestamp } from "../utils/timestamp";

describe("timestamp decorator", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    class TestClass {
        @timestamp
        run(arg: string) {
            return "OK " + arg;
        }
    }

    it("loggue un message avant l'exécution de la méthode", () => {
        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        const obj = new TestClass();
        const result = obj.run("test");

        expect(result).toBe("OK test");

        expect(log).toHaveBeenCalledTimes(1);

        const message = log.mock.calls[0][0];

        expect(message).toContain("Appel de run");

        expect(message).toMatch(/^\[\d{2}:\d{2}:\d{2}\]/);
    });

});
