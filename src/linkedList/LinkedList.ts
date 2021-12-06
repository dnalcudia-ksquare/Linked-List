class LinkedList {
  head: null | LinkedListNode;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data:number) {
    const newNode = new LinkedListNode(data, this.head!);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index:number) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
    return current;
  }

  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output} ${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }

  insertAtIndex(index:number, value:number) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);

    if (prev === null) {
      return null;
    }

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head!.next;
    this.length--;
  }

  removeAtIndex(index:number) {
    if (index === 0) {
      return this.removeHead();
    }
    const prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = prev.next.next;

    this.length--;
  }

  sort() {
    let array: any = []
    const size = this.length
    for (let i = 0; i < size; i++) {
      array.push(this.getByIndex(i)?.value!)
    }
    array.sort()
    return LinkedList.fromValues(array);
  }

  reverseSort() {
    let array: any = []
    const size = this.length
    for (let i = 0; i < size; i++) {
      array.push(this.getByIndex(i)?.value!)
    }
    array.sort()
    const reversed = array.reverse()
    console.log(reversed)
    return LinkedList.fromValues(reversed);
  }

  static fromValues = function (...values: any) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  };
}



class LinkedListNode {
  value: number
  next:LinkedListNode
  constructor(value:number, next:LinkedListNode) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
