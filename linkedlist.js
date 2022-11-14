class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0; //to count elements
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){ //at first
        const node = new Node(value);
        if(this.isEmpty()){ //if list isEmpty head will be first node
            this.head = node;
        }
        else{ // if notEmpty then make new node as head
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    } 

    insert(value, index){
        if(index < 0 || index > this.size){
            return console.log('Invalid index!');
        }
        if(index == 0){
            this.prepend(value);
        }
        else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index -1; i++){
                prev = prev.next;
            }
            node.next = prev.next; // new node conected to existing node
            prev.next = node; // new node inserted
            this.size++;
        }
    }

    append(value){ // at end
        const node = new Node(value);
        if(this.isEmpty()){ //if list isEmpty head will be first node
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){ 
        return "Invalid Index";
    }
    let removedNode
    if(index === 0){
        removedNode = this.head;
        this.head = this.head.next;
    }
    else{
        let prev = this.head;
        for(let i = 0; i < index - 1; i++ ){
            prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty!');
        }
        else{
            let curr = this.head;
            let listValues = " ";
            while(curr){ //if true
                listValues += `${curr.value} `
                curr = curr.next; // till last
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log('list is empty? ' +list.isEmpty());
console.log('list size is ' +list.getSize());
list.print();
list.prepend(10);

list.print();
list.prepend(20);
list.prepend(30);
list.print();

list.append(50);
list.print();

list.insert(10, 4);
list.print();
list.insert(15, 5);
list.print();
console.log("Size of list is " +list.getSize());

console.log(list.removeFrom(10));

console.log("Removed value : " + list.removeFrom(0));
list.print();

console.log("Removed value : " + list.removeFrom(1));
list.print();