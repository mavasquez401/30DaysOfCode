"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  // Node class definition
  class Node {
    data: number; // Data stored in the node
    next: Node | null; // Pointer to the next node in the list

    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  }

  // Function to insert a new node at the tail of the list
  function insert(head: Node | null, data: number): Node {
    const newNode = new Node(data); // Create a new node with the given data
    if (head === null) {
      // If the list is empty, the new node is the head
      return newNode;
    } else {
      // Otherwise, find the end of the list and append the new node
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      return head; // Return the head of the list
    }
  }

  // Function to create a linked list by reading inputs and inserting nodes
  function createLinkedList(): Node | null {
    let head: Node | null = null;
    const T = parseInt(readLine().trim(), 10); // Read the number of elements to insert

    for (let i = 0; i < T; i++) {
      const data = parseInt(readLine().trim(), 10); // Read the data
      head = insert(head, data); // Insert the data into the list
    }

    return head; // Return the head of the created list
  }

  // Function to print the linked list
  function printLinkedList(head: Node | null): void {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.data + " "); // Print the data of each node
      current = current.next;
    }
  }

  // Create the linked list
  const head = createLinkedList();
  // Print the linked list
  printLinkedList(head);
}
