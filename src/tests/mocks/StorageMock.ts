export const mockData = {
    tasks: [],
    boards: []
};

export const storage = {
    load: () => mockData,
    save: (data: any) => {
        mockData.tasks = data.tasks;
        mockData.boards = data.boards;
    }
};
