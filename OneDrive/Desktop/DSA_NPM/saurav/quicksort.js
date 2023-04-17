function quicksort(array) {
 if (array.length <= 1) {
     return array;
 } else {
     var pivot = array[0];
     var left = [];
     var right = [];
     for (var i = 1; i < array.length; i++) {
         if (array[i] < pivot) {
             left.push(array[i]);
         } else {
             right.push(array[i]);
         }
     }
     return quicksort(left).concat(pivot, quicksort(right));
 }
}
// let arr=[3,5,3,6,1];
// arr=quicksort(arr);
// console.log(arr);
module.exports=quicksort;