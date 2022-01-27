function CreateObject(arr) {
    // Write your code here
    var objectarr={};
    for (var i=0;i<arr.length;i+=2){
        objectarr[arr[i]]=arr[i+1];
    }
    return objectarr;
}

module.exports = CreateObject;
