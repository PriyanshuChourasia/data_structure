class LinkedQueue{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedListQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    enqueue(data){
        const newQueue = new LinkedQueue(data);
        if(this.isEmpty()){
            this.head = newQueue;
            this.tail = newQueue;
            this.head.next = this.tail;
            this.size++;
            return;
        }else{
            this.tail.next = newQueue;
            this.tail = newQueue;
            this.size++;
            return;
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is underflow");
            return;
        }
        else if(this.head == null){
            this.tail = null;
            this.size = 0;
            return;
        }
        else{
            let temp = this.head;
            this.head = this.head.next;
            console.log("Data deleted: ",temp.data);
            temp = null;
            this.size--;
            return;
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is underflow");
            return;
        }
        else{
            return this.head.data;
        }
    }

    queueSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue in underflow");
            return;
        }else{
            let currentQueue = this.head;
            let elements = [];
            while(currentQueue !== null){
                elements.push(currentQueue.data);
                currentQueue = currentQueue.next;
            }

            console.log(elements.join("-->"));
        }
    }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());

queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
queue.enqueue(16);

queue.print();

console.log(queue.peek());

console.log(queue.queueSize());

queue.dequeue();
queue.dequeue();

console.log(queue.peek());
queue.print();