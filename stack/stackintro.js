class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    // Add elements to top
    push(element){
        this.items[this.count] = element;
        this.count = this.count + 1;
        return this.count - 1;
    }

    // pop from top
    pop(){
        if(this.count == 0){
            return undefined;
        }

        let deleteItem = this.items[this.count - 1];
        this.count -=1;
        console.log(`${deleteItem} is removed`);
        this.stackSize();
        return deleteItem;
    }

    peek(){
        if(this.count == 0){
            return undefined;
        }

        let topItem = this.items[this.count - 1];
        console.log(`Top element is ${topItem}`);
        return topItem;
    }

    stackSize(){
        console.log(`Size of stack = ${this.count}`);
    }

    isEmpty(){
        if(this.count == 0){
            console.log("Stack is empty");
            return;
        }
        else{
            console.log(`Stack count is ${this.count}`);
        }
        
    }
}


const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);

stack.stackSize();

stack.peek();

stack.isEmpty();

// stack.pop();
// stack.pop();
// stack.pop();