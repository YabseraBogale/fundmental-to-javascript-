function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
    let newarr=anim.slice(beginSlice,endSlice);
    return newarr;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);