// constructor class for BrowserHistory
class BrowserHistory {
  constructor() {
    this.current = null;
  }

  visit(url) {
    const VisitedNode = new Node(url);
    if (this.current) {
      this.current.next = VisitedNode;
      VisitedNode.prev = this.current;
    }
    this.current = VisitedNode;
    VisitedNode.next = null;
    console.log(`Visted: ${url}`);
  }

  back(steps) {
    let cnt = 0;
    while (this.current && this.current.prev && cnt < steps) {
      this.current = this.current.prev;
      cnt++;
    }

    if (cnt > 0)
      console.log(`Moved back ${cnt} step(s) to: ${this.current.data}`);
    else
      console.log(`Cannot go back ${steps} step(s), you're at the first page.`);
  }

  forward(steps) {
    let cnt = 0;
    while (this.current && this.current.next && cnt < steps) {
      this.current = this.current.next;
      cnt++;
    }

    if (cnt > 0)
      console.log(`Moved back ${cnt} step(s) to: ${this.current.data}`);
    else
      console.log(`Cannot go back ${steps} step(s), you're at the first page.`);
  }

  // Get the current page
  currentPage() {
    if (this.current) {
      console.log(`Current page: ${this.current.data}`);
      return this.current.data;
    } else {
      console.log(`No pages visited yet.`);
      return null;
    }
  }
}

// DLL Node
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

// Create a new BrowserHistory instance
const browserHistory = new BrowserHistory();

// Visit pages
browserHistory.visit("google.com");
browserHistory.visit("youtube.com");
browserHistory.visit("github.com");
browserHistory.visit("stackoverflow.com");

// Go back steps
browserHistory.back(1); // Output: Moved back 1 step(s) to: github.com
browserHistory.back(2); // Output: Moved back 2 step(s) to: google.com

// Go forward steps
browserHistory.forward(1); // Output: Moved forward 1 step(s) to: youtube.com
browserHistory.forward(2); // Output: Moved forward 2 step(s) to: stackoverflow.com

// Try to go back more steps than available
browserHistory.back(5); // Output: Cannot go back 5 step(s), you're at the first page.

// Check the current page
browserHistory.currentPage(); // Output: Current page: stackoverflow.com
