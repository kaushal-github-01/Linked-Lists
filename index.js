class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    if (this.size === 0) {
      this.head = new Node(value, this.head);
      this.size++;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
      this.size++;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  listSize() {
    console.log("List Size: ", this.size);
  }

  listHead() {
    console.log("List Head: ", this.head);
  }

  listTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log("List Tail: ", current);
  }

  atIndex(index) {
    let current = this.head;

    if (index === 0) {
      console.log(current);
    } else {
      let count = 0;
      while (count < this.size) {
        if (count == index) {
          console.log(current);
          return;
        } else {
          current = current.nextNode;
          count++;
        }
      }
    }
  }

  pop() {
    let current = this.head;
    let previous;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = current.nextNode;
    this.size--;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log("True");
        return;
      } else {
        current = current.nextNode;
      }
    }
  }

  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) {
        console.log(count);
        return;
      } else {
        current = current.nextNode;
        count++;
      }
    }
  }

  toString() {
    let current = this.head;
    let nodeString = "";
    while (current) {
      nodeString += `{${current.value}} --> `;
      current = current.nextNode;
    }
    nodeString += "null";
    console.log(nodeString);
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}

const ll = new LinkedList();

ll.append(100);
ll.append(200);
ll.append(300);
ll.append(400);
ll.append(500);
ll.append(600);
ll.append(700);
ll.append(800);

// ll.listHead();
// ll.listTail();
// ll.listSize();

// ll.atIndex(2);
// ll.pop();

// ll.contains(500);
// ll.find(500);

ll.toString();

ll.printListData();
