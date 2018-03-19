export class ToDo {
    id: number;
    content: string;
    completed: boolean;
    loaded: boolean;
    edit: boolean;

    constructor(
        id: number,
        content: string,
        completed: boolean = false,
        loaded: boolean = false,
        edit: boolean = false
    ) {
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.loaded = loaded;
        this.edit = edit;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

}
