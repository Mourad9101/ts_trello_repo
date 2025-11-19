#!/usr/bin/env node

import TaskCreate from "./commands/TaskCreate";
import TaskList from "./commands/TaskList";
import TaskUpdate from "./commands/TaskUpdate";
import TaskDelete from "./commands/TaskDelete";

import BoardCreate from "./commands/BoardCreate";
import BoardList from "./commands/BoardList";
import BoardUpdate from "./commands/BoardUpdate";
import BoardDelete from "./commands/BoardDelete";

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

// ⭐ Table de routage
const commands = new Map<string, any>([
    ["task:create", TaskCreate],
    ["task:list", TaskList],
    ["task:update", TaskUpdate],
    ["task:delete", TaskDelete],

    ["board:create", BoardCreate],
    ["board:list", BoardList],
    ["board:update", BoardUpdate],
    ["board:delete", BoardDelete],
]);

const CommandClass = commands.get(command);

if (CommandClass) {
    new CommandClass().execute(...commandArgs);
} else {
    console.log("\nCommandes disponibles :\n");

    console.log(" Tasks :");
    console.log("   task:create <titre> [boardId]");
    console.log("   task:list");
    console.log("   task:update <id> <nouveau titre>");
    console.log("   task:delete <id>");

    console.log("\n Boards :");
    console.log("   board:create <nom>");
    console.log("   board:list");
    console.log("   board:update <id> <nouveau nom>");
    console.log("   board:delete <id>");

    console.log("");
}
