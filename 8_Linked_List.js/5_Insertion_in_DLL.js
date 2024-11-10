class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

const PrintDll = (head) => {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
};

const ArrayToDLL = (arr) => {
  let n = arr.length;

  const head = new Node(arr[0]);
  let prevNode = head;

  for (let i = 1; i < n; i++) {
    let newNode = new Node(arr[i], null, prevNode);
    prevNode.next = newNode;
    prevNode = prevNode.next;
  }

  return head;
};

// INSERTION in Doubly Linked List (Before)
// Head ---> (Before)
const InsertHead = (head, value) => {
  let newHead = new Node(value, head, null);
  head.back = newHead;
  return newHead;
};

// Tail ---> (Before)
const InsertTail = (head, value) => {
  if (head == null) return new Node(value, null, null);
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let prev = temp.back;
  let newTail = new Node(value, temp, temp.back);
  prev.next = newTail;
  return head;
};

// Kth position ---> (Before)
const InsertKthNode = (head, value, k) => {
  if (k == 1) return InsertHead(head, value);

  let temp = head;
  let cnt = 0;

  while (temp !== null) {
    cnt++;
    if (cnt == k) break;
    temp = temp.next;
  }
  let prev = temp.back;
  let newNode = new Node(value, temp, prev);
  prev.next = newNode;
  temp.back = newNode;
  return head;
};

// Value/node ---> (Before)
const InsertBeforeValue = (value, newValue) => {
  if (value == null) return;
  let prev = value.back;
  let newNode = new Node(newValue, value, prev);
  prev.next = newNode;
  value.back = newNode;
};

// Insertion in Doubly Linked List ---> (After)
// Head ---> (After)
const InsertHeadAfter = (head, value) => {
  if (head == null) return new Node(value, null, null);
  let nextNode = head.next;
  let newNode = new Node(value, nextNode, head);
  head.next = newNode;
  return head;
};

// Tail ---> (After)
const InsertTailAfter = (head, value) => {
  if (head == null) return new Node(value, null, null);
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let newNode = new Node(value, null, temp);
  temp.next = newNode;
  return head;
};

// kth position ---> (After)
const InsertKthAfter = (head, value, k) => {
  if (k == 1) return InsertHeadAfter(head, value);

  let temp = head;
  let cnt = 0;

  while (temp.next !== null) {
    cnt++;
    if (cnt == k) break;
    temp = temp.next;
  }

  if (temp == null) return;
  if (temp.next == null) return InsertTailAfter(head, value);

  let nextNode = temp.next;
  let newNode = new Node(value, nextNode, temp);
  nextNode.back = newNode;
  temp.next = newNode;

  return head;
};

// value/node ---> (After)
const InsertAfterValue = (head, value, newValue) => {
  if (head == null) return;
  let temp = head;
  while (temp.data !== value) {
    temp = temp.next;
  }
  let nextNode = temp.next;
  let newNode = new Node(newValue, nextNode, temp);
  temp.next = newNode;
  newNode.back = newNode;
  return head;
};

const arr = [10, 20, 30, 40];
let head = ArrayToDLL(arr);
head = InsertAfterValue(head, 30, 2);
// InsertBeforeValue(head.next, 1);
PrintDll(head);
