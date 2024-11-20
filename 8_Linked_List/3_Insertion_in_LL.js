class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Print Function
const PrintLL = (head) => {
  let temp = head;
  //   let LL = [];
  while (temp !== null) {
    // LL.push(temp.data);
    console.log(temp.data, " ");
    temp = temp.next;
  }
  //   console.log(LL);
};

// Function to convert an array into a linked list
const ArrayToLinkedList = (arr) => {
  // base case
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return head;
};

// Insertion in Linked List
// HEAD --->
const InsertHead = (head, value) => {
  let temp = new Node(value, head);
  return temp;
};

// TAIL --->
const InsertTail = (head, value) => {
  if (head === null) {
    return new Node(value);
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let newNode = new Node(value);
  temp.next = newNode;
  return head;
};

// Kth Position
const InsertNodeAtKthPosition = (head, value, k) => {
  if (head == null) {
    if (k == 1) return new Node(value);
  }

  if (k == 1) {
    return new Node(value, head);
  }

  let cnt = 0;
  let temp = head;

  while (temp.next !== null) {
    cnt++;
    if (cnt == k - 1) {
      let newNode = new Node(value);
      newNode.next = temp.next;
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }
  return head;
};

// Vallue/data
const InsertBeforeValue = (head, value, newValue) => {
  if (head === null) return null;
  if (head.data == value) return new Node(newValue, head);

  let temp = head;
  while (temp.next !== null) {
    if (temp.next.data == value) {
      let newNode = new Node(newValue);
      newNode.next = temp.next;
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }
  return head;
};

// Example array to be converted into a linked list
let arr = [10, 20, 30, 40];
let head = ArrayToLinkedList(arr);
console.log("head--->", head.data);
head = InsertBeforeValue(head, 10, 3);
PrintLL(head);
