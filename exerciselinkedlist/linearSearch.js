

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    insert_values(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList(){
        let currentNode = this.head;
        if(this.head == null){
            console.log("List is empty");
            return;
        }

        while(currentNode != null){
            console.log(currentNode.data, "---->");
            currentNode = currentNode.next;
        }
    }

    search_target(data){
        if(this.head == null){
            console.log("List is empty");
        }
        let currentNode = this.head;
        let found = false;
        
        while(currentNode != null){
            if(currentNode.data == data){
                found = true;
                break;
            }
            currentNode = currentNode.next;
        }

        if(found == true){
            console.log("Data found in node");
        }else{
            console.log("Data not found in node");
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.insert_values(1);
linkedlist.insert_values(2);
linkedlist.insert_values(4);
linkedlist.insert_values(5);
linkedlist.insert_values(56);
linkedlist.insert_values(76);
linkedlist.insert_values(31);
linkedlist.insert_values(12);
linkedlist.insert_values(19);

linkedlist.printList();

linkedlist.search_target(76);