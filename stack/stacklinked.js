/***
 * Implementing stack using linked list
 * 
 */

class StackNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackLinked{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head == null;
    }

    push(data){
        const newNode = new StackNode(data);
        if(this.isEmpty()){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }else{
            
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.head.data;
        }
    }

    display(){
        if(this.isEmpty()){
            return null;
        }else{
            let str = "";
            let currentNode = this.head;
            while(currentNode != null){
                str += currentNode.data + "-->"
                currentNode = currentNode.next;
            }

            console.log(str);
            console.log("---- ---- ---- ---- ---- ----");
        }
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }else{
            let poppedElement = this.head;
            this.head = this.head.next;
            poppedElement.next = null;
            return poppedElement.data;
        }
    }
}


const stack = new StackLinked();

console.log("Is stack empty",stack.isEmpty());

stack.push(12)
stack.push(14)
stack.push(15)
stack.push(16)
stack.push(18)
stack.push(22)
stack.push(27)


console.log("Peek Stack",stack.peek());

stack.display();

stack.pop();
stack.pop();
stack.pop();

console.log("Is stack empty",stack.isEmpty());

stack.display();

console.log("Peek on head",stack.peek());