class Node{
    constructor (value){
        this.value =value
        this.next =null
    }
}
class SSL{
    constructor(){
        this.head =null
    }
    isEmpty(){
        if(this.head===null){
           return true
        }else {
            return false
        }

    }
    addToBack(value){
        if(this.isEmpty()){
            this.head=new Node(value);
        }
        else{
            let  y= this.head
            console.log(y);
            while (y.next !== null){
                    y = y.next;
             }
             y.next = new Node(value);
        }
        return this
    }
    read(){
        let get = this.head
        if(this.isEmpty()){
            return false
        }else{
            while(get!==null){
             console.log(get.value)
             get=get.next
            }
            console.log(get)
        }
    }
    find(value){
        if(this.isEmpty()){
            return false
        }else{
            let get = this.head
            while(get){
                if(get.value==value){
                    return true
                }else{
                    get=get.next
                }
            }
            return false 
        }
    }
    removeAtfront(){
        if (this.isEmpty()){
            return false}
         
         else{

            this.head=this.head.next
             return this
        }
    }
    
    delete(value){
        let runner = this.head
            while(runner){
                if(runner.value==value){
                    delete runner.value
                    return this
                }
                runner=runner.next
            }
        }
    }
    // ***bonus
    // size() {
    //     let count = 0; 
    //     let node = this.head;
    //     while (node) {
    //         count++;
    //         node = node.next
    //     }
    //     return count;
    // }

// var firstNode= new Node(5);
// var secondNode = new Node(13);
// firstNode.next= secondNode;
// var firstSSL= new SSL();
// firstSSL.head= firstNode
// console.log(firstNode);

var New = new SSL();
// console.log(New);
// New.addToBack(55555);
// console.log(New);
New.addToBack(11111)
New.addToBack(55555)
New.addToBack(55775)
New.addToBack(321);
// New.read();
// New.removeAtfront()
// New.read();
// New.size();
New.read ();
console.log(New.removeAtfront());
New.read ();
console.log(New.delet);