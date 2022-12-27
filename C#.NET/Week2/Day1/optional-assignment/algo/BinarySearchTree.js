class Node {
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor()
    {
        this.root = null;
    }
    isEmpty(){
        // if (this.root == null){
        //     return false
        // } else{
        //     return true
        // }
        return this.root == null;
    }
    min(){
        if (this.isEmpty())
        {
            return false
        }
        let runner = this.root
        let minVal = runner.value
        while(runner.left !==null){
            if(minVal > runner.left.value ){
                minVal = runner.left.value
            }
            runner = runner.left
        }
        return minVal
    }
max(){
    if (this.isEmpty())
    {
        return false
    }
    let runner = this.root ;
    let maxVal = runner.value;
    while( runner.right !== null){
        if (maxVal<runner.right.value){
            maxVal = runner.right.value;
        }
        runner = runner.right
    }
    return maxVal
}
find(value){
    if(this.isEmpty()!==null){
    let runner=this.root;
   while (runner)
   {    if(runner.value==value){
        return true;
    }
    else { 
        if (runner.value>value)
        {
        runner=runner.left;
    }
    else{
        runner=runner.right
    }
}
}

    }
        return false

}
}
var node1 = new Node(8);
var node2 = new Node(45);
var node3 = new Node(6);
node1.right = node2;
node1.left =  node3;
var myBST = new BST();
myBST.root = node1;
// console.log(myBST.min()); 
// console.log(myBST.isEmpty());
console.log(myBST.find(0));