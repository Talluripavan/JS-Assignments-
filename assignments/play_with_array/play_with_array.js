function getEven(arr) {
    var evenarr=[]
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]%2===0){
                evenarr.push(arr[i]);
            }
        }
return evenarr;
}

function multiplyByN(arr, n) {
   for (var i = 0; i < arr.length; i++) {
            arr[i]=arr[i]*n;
        }
        
         return arr;
}

function removeNthElement(arr, n) {
        for (var i = 0; i < arr.length; i++) {
            if ((i)==n){
                arr.splice(i, 1);
                break;
            }
            
        }
        return arr;
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}