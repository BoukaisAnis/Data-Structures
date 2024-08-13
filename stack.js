class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to hold stack elements
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element off the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Check for underflow
        }
        return this.items.pop(); // Remove and return the last element
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Check for underflow
        }
        return this.items[this.items.length - 1]; // Return the last element
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
