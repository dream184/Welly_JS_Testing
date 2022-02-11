// 使用 Linked List 實作 Stack ，實作需包含以下方法。
//  push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 

class Node {
  constructor(data) {
    this.data = data
    this.next = null                
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop() {
    const index = this.length
    return this.removeAt(index - 1)
  }
  size() {
    console.log('length:', this.length)
    return this.length;
  }
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      console.log("Can't find node. Unable to delete node!")
      return null;
    }
    const deleteNode = this.getNode(index)
    const prevNode = this.getNode(index - 1)
    const nextNode = deleteNode.next

    if (index === 0 && this.length - 1 === 0) {
      this.head = null
      this.tail = null
    } else if (index === 0) {
      this.head = this.head.next
    } else {
      prevNode.next = nextNode;
      if (nextNode === null) {
        this.tail = prevNode;
      }
    }
    this.length = this.length - 1
    console.log('deletedNode:', deleteNode.data)
    return deleteNode.data
  }
}

const stack = new Stack() 
stack.push(1)
stack.push(2) 
stack.push(3) 
stack.pop() // 3 
stack.size() // 2 