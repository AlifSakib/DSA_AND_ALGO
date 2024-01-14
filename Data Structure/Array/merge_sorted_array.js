function mergeSortedArray(array1, array2){
    const mergedArray = []
    let i = 1
    let j = 1
    let array1Item = array1[0]
    let array2Item = array2[0]

    // Check Inputs
    if(array1?.lenght === 0){
        return array2
    }

    if(array2?.lenght === 0){
        return array1
    }

    while (array1Item || array2Item){
        console.log(array1Item, array2Item);
        if(!array2Item || array1Item < array2Item){
            mergeSortedArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }

    return mergedArray
}

mergeSortedArray([0,3,4,31], [4,6,30])