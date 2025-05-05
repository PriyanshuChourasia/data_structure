/**
 * Singly Linked list
 */

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

    // Insert a new Node in the end of the linked list
    append(data){
        const newNode = new Node(data);

        // If the head is null it means the list is empty now, there we will be starting the list
        if(this.head == null){
            this.head = newNode;
        }
        else{
            // now we have copied the list to current list
            let current = this.head;

            /**  Loop until we get the end point of it means Linked list are non-contiguous linear data structure that uses node to store data, where each node is linked
             * to the next node in the sequence but they dont follow the contiguous memory allocation order.
             * 
             * |****|  |****|  |****|  |****|
             * |data|->|next|->|data|->|next|
             * |****|  |****|  |****|  |****|
             * 
             * This chain continues to be created as we push values in the node.
             * data always contains the data of the node and next contains the address to the next node.
            */
            while(current.next !== null){
                current = current.next;
            }


            /**
             * after looping to the null address we got the node which have data in the data part but as this is the singly linked list
             * it's next value contains null because it is the tail node and now we are pushing one more node so the previous nodes next part will contain the address of this node and this nodes 
             * next part will
             * have null value again
             * n
             */
            current.next = newNode;
        }
    }

    // This code is tried by me
    insertAtBegining(data){
        // first we created a new node with data and the nodes next value is null so we will put the whole head value in the current and then the new nodes next value will be the whole list
        const newNode = new Node(data);
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
    }


    // delete data
    delete(data){
        if(this.head == null){
            console.log("No nodes available");
            console.log("List is empty");
            return;
        }
        else if(this.head.data == data){
            this.head = this.head.next;
            return;
        }
        else{
            let current = this.head;

            while(current.next !== null){
                if(current.next.data === data){
                    current.next = current.next.next;
                    return;
                }
                current = current.next;                
            }
        }
    }


    search(data){
        let current = this.head;

        while(current !== null){
            if(current.data === data){
                console.log("found");
                return true;
            }
            current = current.next;
        }
        console.log("not found");
        return false;
    }


    // print the nodes list
    printNode(){
        let current = this.head;
        const elements = [];
        /** loop until we get the last nodes next value null means we will get the whole list  
         * and everytime we create a copy of node so original node should be hampered
         * 
        */
        while(current != null){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '))
    }
}


/**
 * creating new Object from class
 */

const linkedList = new LinkedList();

/**
 * adding values to the node
 */
linkedList.append(23);
linkedList.append(24);
linkedList.append(25);
linkedList.append(26);
linkedList.insertAtBegining(34);
linkedList.insertAtBegining(36);
linkedList.insertAtBegining(38);


// delete a node
linkedList.delete(24);

// search a node
linkedList.search(25);

// print the linked list
linkedList.printNode();