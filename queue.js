class Queue{
    constructor(){
        this.array = [];
        this.rear = -1;
        this.front = -1;
    }

    enqueue(element){
        this.rear++;
        this.array[this.rear] = element;
    }

    dequeue(){
        if(this.front === this.rear){
            console.log('Queue is empty');
            return;
        }
        this.front++;
        const ele = this.array[this.front];
        console.log("Removed " + ele);
        this.array[this.front] = null
    }

    printArray(){
        console.log(this.array);
    }
}

const queueObj = new Queue();
queueObj.printArray();
queueObj.enqueue(10);
queueObj.enqueue(30);
queueObj.enqueue(50);
queueObj.printArray();
queueObj.dequeue();
queueObj.printArray();
queueObj.dequeue();
queueObj.printArray();
queueObj.dequeue();
queueObj.printArray();
queueObj.dequeue();