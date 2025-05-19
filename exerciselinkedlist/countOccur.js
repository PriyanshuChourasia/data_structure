const arr = [1,34,54,23,67,81,12,1,25,54,1,234,1,2,1,67,34,2,1,2];


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CountLinkedList{
    constructor(){
        this.head = null;
    }

    insert_values(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    search_count(data){
        if(this.head == null){
            console.log("List is empty");
            return;
        }
        let currentNode = this.head;
        let count = 0;

        while(currentNode != null){
            if(currentNode.data == data){
                count = count + 1;
            }
            currentNode = currentNode.next;
        }

        console.log(`Total count of ${data} is ${count}`);
    }

    printList(){
        if(this.head == null){
            console.log("List is empty");
            return;
        }

        let currentNode = this.head;

        let str = "";

        while(currentNode != null){
            str += currentNode.data + "--->";
            currentNode = currentNode.next;
        }

        console.log(str);
    }
}

const ls = new CountLinkedList();

for(let i=0; i<arr.length; i++){
    ls.insert_values(arr[i]);
}

ls.printList();

ls.search_count(54);
