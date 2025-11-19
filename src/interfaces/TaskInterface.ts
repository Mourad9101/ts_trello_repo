export type Status = "todo" | "in_progress" | "done";

export interface Task {
    id: string;
    title: string;
    description?: string;
    assignee?: string;
    status: Status;
    createdAt: string;
    updatedAt?: string;
}
