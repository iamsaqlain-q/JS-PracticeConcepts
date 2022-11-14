function stackOperations() {
    let array = [];
    var top = 0;

    function push(element) {
        array[top] = element;
        top++;
    }
    printArray();
    push(10);
    push(20);
    push(30);
    printArray();

    function pop() {
        if (top == 0) {
            console.log("Stack is empty");
            return;
        }
        const lastEle = array[top - 1];
        array[top - 1] = null;
        top--;
        return console.log("Removed element : " + lastEle);
    }

    pop();

    function printArray() {
        console.log(array);
    }
    printArray();
}
stackOperations();