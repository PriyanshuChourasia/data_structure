
class CircularLinkedNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class CircularLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0 && this.head == null && this.tail == null
    }

    insertAtHead(data){
        const newNode = new CircularLinkedNode(data);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
            this.size++;
            return;
        }
        
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head = newNode;
        this.size++
    }

    insertAtTail(data){
        const newNode = new CircularLinkedNode(data);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    delete_from_head(){
        if(this.isEmpty()){
            this.head = null;
            this.tail = null;
            this.size = 0;
            console.log("List is empty");
            return;
        }
        else if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        else{
            let temp = this.head.next;
            this.tail.next = temp;
            this.head = temp;
            this.size--;
        }
    }


    delete_from_last(){
        if(this.isEmpty()){
            this.head = null;
            this.tail = null;
            console.log("List is empty");
            return;
        }else if(this.tail == this.head){
            this.head = null;
            this.tail = null;
            return;
        }
        else{
            let temp = this.head;

            while(temp.next.data != this.tail.data){
                temp = temp.next;
            }

            temp.next = this.head;
            this.tail = temp;
        }
    }


    display(){
        if(this.isEmpty()){
            console.log(`List is empty`);
            return;
        }

        console.log("dis")

        let str = "";
        str += this.head.data + "--->";
        let temp = this.head.next;
        while(temp != this.head){
            str += temp.data + "--->"
            temp = temp.next;
        }
        str +=  temp.data + "--->";

        console.log(str);

    }
}


const circularList = new CircularLinkedList();

console.log(circularList.isEmpty());

circularList.insertAtHead(12);
circularList.insertAtHead(13);
circularList.insertAtHead(14);
circularList.insertAtHead(15);


circularList.insertAtTail(21);
circularList.insertAtTail(22);


circularList.delete_from_head();

circularList.delete_from_last();

circularList.display();