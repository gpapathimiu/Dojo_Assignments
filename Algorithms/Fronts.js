class Node {
    constructor(data){
        this.data = data;
        this.next = null; 
    }
}


class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        if(!this.head) {
            return null;
        }
        let disposed = this.head;
        this.head = this.head.next;
        disposed.next = null;
        return this.head
    }
    front() {
        if(!this.head) {
            return null;
        }
        return this.head.data;
    }
    length() {
        if(!this.head) {
            return null;
        }
        let runner=this.head;
        let count = 0;
        while (runner !== null) {
            count++;
            runner = runner.next
        }
        return count;
    }
}




SingleList = new SLL()

SingleList.addFront(18)
SingleList.addFront(5)
SingleList.addFront(73)

SingleList.removeFront()
SingleList.removeFront() 