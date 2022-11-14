class Stack {
    constructor(){
        this.array = [];
        this.top = 0;
    }       
push (element){
    this.array[this.top] = element;
    this.top++;
} 

pop(){
    if(this.top == 0){
        console.log("Stack is empty");
        return;
    }
    const lastEle = this.array[this.top - 1];
    this.array[this.top - 1] = null;
    this.top--;
    return console.log("Removed element : " + lastEle);
}

peek(){
    return console.log("Top : " + this.array[this.top - 1]);
}

printArray(){
    console.log(this.array);
    }
}
const stackObj = new Stack();

stackObj.printArray();
stackObj.push(10);
stackObj.push(20);
stackObj.push(30);
stackObj.printArray();
stackObj.peek();
stackObj.pop();
stackObj.printArray();