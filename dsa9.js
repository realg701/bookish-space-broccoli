/*
Day 9

### Question 1: Implement a Stack using TypeScript

*Problem Statement:*
Implement a stack using TypeScript. The stack should have the following methods:
1. push(item: T): void - Adds an item to the top of the stack.
2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.

*Constraints:*
- Use generics to make the stack implementation type-safe.
- The stack should handle various data types (number, string, etc.).

*Example Usage:*
typescript
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1
console.log(stack.isEmpty()); // Output: true
*/
class Stack {
    elements = [];
    push(item) {
        this.elements.push(item);
    }
    pop() {
        return this.elements.pop();
    }
    peek() {
        return this.elements[this.elements.length - 1];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}
/*
const stack = new Stack<number>();
stack.push(4);
stack.push(6);
console.log(stack.peek()); // outpu: 6
console.log(stack.pop()); // outpu: 6
console.log(stack.pop()); // outpu: 4
console.log(stack.isEmpty()); // outpu: true

const stackStr = new Stack<string>();
stackStr.push("Absar");
stackStr.push("Siddiqui");
console.log(stackStr.peek()); // outpu: Siddiqui
console.log(stackStr.pop()); // outpu: Siddiqui
console.log(stackStr.pop()); // outpu: Absar
console.log(stackStr.isEmpty()); // outpu: true
*/
/*
### Question 2: Implement a Queue using TypeScript

*Problem Statement:*
Implement a queue using TypeScript. The queue should have the following methods:
1. enqueue(item: T): void - Adds an item to the end of the queue.
2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.

*Constraints:*
- Use generics to make the queue implementation type-safe.
- The queue should handle various data types (number, string, etc.).

*Example Usage:*
typescript
const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: "a"
console.log(queue.dequeue());  // Output: "a"
console.log(queue.dequeue());  // Output: "b"
console.log(queue.isEmpty()); // Output: true
*/
class Queue {
    elements = [];
    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    peek() {
        return this.elements[0];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}
const queue = new Queue();
queue.enqueue("Ahtesham");
queue.enqueue("Siddiqui");
console.log(queue.peek()); // output: Ahtesham
console.log(queue.dequeue()); // output: Ahtesham
console.log(queue.dequeue()); // output: Siddiqui
console.log(queue.isEmpty()); // output: true
const queueNum = new Queue();
queueNum.enqueue(4);
queueNum.enqueue(6);
console.log(queueNum.peek()); // outpu: 4
console.log(queueNum.dequeue()); // outpu: 4
console.log(queueNum.dequeue()); // outpu: 6
console.log(queueNum.isEmpty()); // outpu: true
export {};
