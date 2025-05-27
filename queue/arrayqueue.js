class Queue{
    constructor(){
        this.items = [];
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    enqueue(element){
        this.items.push(element);
        this.size = this.size + 1;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }else{
            return this.items.shift();
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }else{
            return this.items[0];
        }
    }

    queueSize(){
        return this.size;
    }

    print(){
        return this.items.join("->")
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(18);
queue.enqueue(28);
queue.enqueue(30);
queue.enqueue(35);

console.log(queue.print());

queue.dequeue();
queue.dequeue();

console.log(queue.print());

console.log(queue.isEmpty());

console.log(queue.peek());
console.log(queue.queueSize());