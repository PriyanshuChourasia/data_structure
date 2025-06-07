class SinglyNode{
    constructor(data){
        this.data = data;
        this.next = null
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
// checks list is empty or not
    isEmpty(){
        return this.size == 0 && this.head == null
    }
// checks the length of the list
    listlength(){
        return this.size;
    }

    insertAtHead(data){
        const newNode = new SinglyNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

// displays the linked list nodes
    display(){
        if(this.isEmpty()){
            console.log("List is empty");
            return;
        }

        let str = "";

        for(let temp = this.head; temp != null; temp = temp.next){
            str += temp.data + "-->"
        }

        str += "None";

        console.log(str);
    }
}


const linkedList = new SinglyLinkedList();

console.log(linkedList.isEmpty());

console.log(linkedList.listlength());

linkedList.insertAtHead(12);
linkedList.insertAtHead(13);
linkedList.insertAtHead(14);
linkedList.insertAtHead(15);
linkedList.insertAtHead(16);
linkedList.insertAtHead(17);

linkedList.display();