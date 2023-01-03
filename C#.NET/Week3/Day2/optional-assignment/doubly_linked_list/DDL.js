class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addAtFront(value) {
      // Create a new node
      const newNode = new Node(value);
      // Set the next attribute of the new node to the current head of the list
      newNode.next = this.head;
      // Set the prev attribute of the new node to null

      // If the list is not empty, set the prev attribute of the current head of the list to the new node
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      // Update the head of the list to be the new node
      this.head = newNode;
    }
  }
var DLL = new DoublyLinkedList();

DLL.addAtFront(22);
DLL.addAtFront(15);
DLL.addAtFront(10);
console.log(DLL);
  
  