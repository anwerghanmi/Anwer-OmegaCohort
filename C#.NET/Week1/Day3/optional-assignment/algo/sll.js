// Singly Linekd List

class Node {
    constructor (value){
        this.value  = value
        this.next = null
    }
}

class SSL {
    constructor (){
        this.head = null;
    }
    isEmpty (){
        // Your cosde will be here
        if (this.head === null){
            return true;
        }else {
            return false;
        }
    }
    addToBack (value){
        if(this.isEmpty()){
            this.head = new Node(value);
        }
        else {
            let runner  = this.head;
            while(runner.next !== null){
                runner = runner.next;
            }
            runner.next = new Node(value);
        }
        return this
    }
    read (){
        if(this.isEmpty()){
            return false
        }
        else {
            let runner = this.read
            while (runner !== null){
                console.log(runner.value);
                runner = runner.next
            }
        }
    }
    find(value){
        return true//false
    }
    removeAtFront(){

    }

}


var firstNode = new Node(5);
var secndNode = new Node(13);
firstNode.next = secndNode;
var firstSSL = new SSL();
firstSSL.head = firstNode
console.log(firstSSL);
var mySLL  = new SSL();
console.log(mySLL);
mySLL.addToBack(661);
// console.log(mySLL);
// mySLL.addToBack(999);
// console.log(mySLL);
mySLL.read()