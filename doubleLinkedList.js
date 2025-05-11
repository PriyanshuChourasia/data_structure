


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


    printDoubleList(){
        if(this.head == null){
            console.log("List is empty");
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
            console.log("List is empty");
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
doubleLinkedList.insertAtFirst(13);
doubleLinkedList.insertAtLast(15);

doubleLinkedList.printDoubleList();
doubleLinkedList.printReverseList();