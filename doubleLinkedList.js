


class DoubleNode{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtFirst(data){
        const newNode = new DoubleNode(data);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }


    insertAtLast(data){
        const newNode = new DoubleNode(data);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

    }

    deleteAtFirst(){
        if(this.head == null){
            console.log("Operation cannot be performed");
            return;
        }

        let currentNode = this.head;
        this.head = this.head.next;

        if(this.head != null){
            this.head.prev = null;
        }
        else if(this.head == null){
            this.tail = this.head;
        }

        currentNode.next = null;
    }


    printDoubleList(){
        if(this.head == null){
            // console.log(this.head,"head");
            console.log("List is empty");
            return;
        }

        
        let currentNode = this.head;
        let str = "";

        while(currentNode != null){
            str += currentNode.data + " <=> ";
            currentNode = currentNode.next;
        }

        console.log(str + "Null");
    }
    printReverseList(){
        if(this.head == null){
            // console.log(this.tail,"tail");
            console.log("List is empty");
            return;
        }

        
        let currentNode = this.tail;
        let str = "";

        while(currentNode != null){
            str += currentNode.data + " <=> ";
            currentNode = currentNode.prev;
        }

        console.log(str + "Null");
    }
}

const doubleLinkedList = new DoubleLinkedList();


doubleLinkedList.insertAtFirst(12);
// doubleLinkedList.insertAtFirst(13);
// doubleLinkedList.insertAtLast(15);

doubleLinkedList.deleteAtFirst();

doubleLinkedList.printDoubleList();
doubleLinkedList.printReverseList();