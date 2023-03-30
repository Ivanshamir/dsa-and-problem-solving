
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data); 
        this.head = this.tail = node; 
        this.length = 1; 
    }

    append(value) {
        let node = new Node(value); 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    } 

    prepend(value) {
        let node = new Node(value); 
        node.next = this.head; 
        this.head = node; 
        this.length++; 
    } 

    appendAtPosition(value, n) { 
        if(n === 1) {
            this.prepend(value); 
            return; 
        } 
      
        if(n > this.length) {
            this.append(value); 
            return; 
        }
      
        let node = new Node(value); 
        let prevNode = this.findNode(n-1); 
        const temp = prevNode.next; 
        prevNode.next = node; 
        node.next = temp; 
        this.length++; 
    } 
      
    findNode(n) {
        let data = this.head; 
        let count = 0; 
        
        while(data) {
            count++; 
            if(count === n) {
                break; 
            } 
        
            data = data.next; 
        } 
        
        return data; 
    }

    print() {
        let data = this.head; 
        while(data) {
            console.log(data.value);
            data = data.next; 
        }
    } 

    update(value, n) {
        let node = this.findNode(n); 
        node.value = value; 
    }

    delete(n) {
        if (n === 1) {
          this.head = this.head.next;
          if (!this.head) {
              this.tail = null;
          }
          this.length--;
          return;
        }
      
        let prevNode = this.findNode(n - 1);
        prevNode.next = prevNode.next.next;
      
        if (n === this.length) {
            this.tail = prevNode;
        }
      
        this.length--;
    }
} 


let list = new LinkedList(10); 
list.append(20);  
list.append(30);  

list.appendAtPosition(100, 2); 
list.appendAtPosition(100, 5); 
list.appendAtPosition(-25, 1); 

list.update(25, 1); 
list.update(2000, 4); 
list.delete(4)

list.print(); 