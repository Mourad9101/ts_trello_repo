export type Status = "todo" | "in_progress" | "done";

export interface TaskInterface {
    id: string;
    title: string;
    description?: string;
    assignee?: string;
    status: Status;
    boardId?: string;
    createdAt: string;
    updatedAt?: string;
}
