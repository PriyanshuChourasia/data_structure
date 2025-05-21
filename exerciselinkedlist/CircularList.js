

class CircularNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
// insert at first from the list
    insert_at_first(data){
        const newNode = new CircularNode(data);
        if(this.head == null && this.tail == null){
            this.head = newNode;
            this.tail= newNode;
            this.tail.next = this.head;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = newNode;
    }

    // insert at last in the list
    insert_at_end(data){
        const newNode = new CircularNode(data);
        if(this.tail == null){
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    
    // delete a node from the list at top
    delete_at_first(){
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        let currentNode = this.head.next;
        this.tail.next = currentNode;
        this.head = currentNode;
    }

    // delete a node from the tail from the last of the linked list
    delete_at_last(){
        if(this.tail == this.head){
            this.head = null;
            this.tail = null;
            return;
        }
        let currentNode = this.head;

        while(currentNode.next.data != this.tail.data){
            currentNode = currentNode.next;
        }
        currentNode.next = this.head;
        this.tail = currentNode;
    }

// print the list
    printList(){
        if(this.head == null && this.tail == null){
            console.log("List is empty");
            return;
        }
        let str = "";
        str = str + this.head.data + "--->";
        let currentNode = this.head.next;
        
        while(currentNode != this.head){
            str = str + currentNode.data + "--->";
            currentNode = currentNode.next;
        }

        str = str + currentNode.data + "--->";
        console.log(str);
    }
}

const cl = new CircularList();

cl.insert_at_first(12);
cl.insert_at_first(34);
// cl.insert_at_first(56);
// cl.insert_at_first(76);
// cl.insert_at_first(16);

// cl.insert_at_end(55);
// cl.insert_at_end(15);
// cl.delete_at_first();
cl.delete_at_last();
// cl.delete_at_last();

cl.printList();