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

/* ************************ */
/* Code Function Here */
const reverseLLInKNodes = (head, k) => {
  if (head == null) return null;

  let temp = head;
  let cnt = 0;

  while (temp !== null && cnt < k) {
    temp = temp.next;
    cnt++;
  }

  if (cnt < k) return head;

  let prev = null;
  let nextNode = null;
  temp = head;
  cnt = 0;

  while (temp !== null && cnt < k) {
    nextNode = temp.next;
    temp.next = prev;
    prev = temp;
    temp = nextNode;
    cnt++;
  }

  if (nextNode !== null) head.next = reverseLLInKNodes(nextNode, k);

  return prev;
};

const arr = [1, 2, 3, 4, 5];
let head = ArrayToLinkedList(arr);
// head = reverseLL(head);
head = reverseLLInKNodes(head, 3);
PrintLL(head);
