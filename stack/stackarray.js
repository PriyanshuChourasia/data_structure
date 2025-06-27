

class StackArray{
    constructor(capacity){
        this.cap = capacity;
        this.size = 0;
        this.stack = new Array(capacity);
    }

    is_empty(){
        return this.size == 0;
    }

    push(data){
        if(this.size == this.cap){
            console.log("Stack is overflow");
            return;
        }else{
            this.stack[this.size] = data;
            ++this.size;
        }
    }

    peek(){
        if(this.is_empty()){
            console.log("Stack is Empty");
            return;
        }
        return this.stack[this.size - 1];
    }

    pop(){
        if(this.is_empty()){
            console.log("Stack is empty");
            return;
        }
        this.stack[this.size] = -1;
        this.size--;
    }

    destroy(){
        if(this.is_empty()){
            console.log("Stack is empty");
            return;
        }
        this.size = 0;
    }
}

const arrStack = new StackArray(5);

arrStack.push(45);
arrStack.push(46);
arrStack.push(78);
arrStack.push(81);
arrStack.push(90);

const peek_Val = arrStack.peek()

console.log(peek_Val);

arrStack.pop();

console.log(arrStack.peek());

arrStack.destroy();

console.log(arrStack.peek());