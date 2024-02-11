class SLL {
    constructor() {
        this.head = null;
    }
    display() {
        if(!this.head) {
            return null;
        }
        let runner = this.head;
        let items = [];
        while (runner !== null) {
            items.push(runner.data);
            runner = runner.next;
        }
        return items.join(', ');
    }
}
