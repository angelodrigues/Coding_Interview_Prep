function updateInventory(arr1, arr2) {
    const result = [...arr1];

    for (let i = 0; i < arr2.length; i++) {
        const newItemName = arr2[i][1];
        const newItemQuantity = arr2[i][0];

        if (!result.map(item => item[1]).includes(newItemName)) {
            result.push(arr2[i]);
        } else {
            const existingItem = result.find(item => item[1] === newItemName);
            if (existingItem[0] < newItemQuantity) {
                existingItem[0] += newItemQuantity;
            }
        }
    }

    return result.sort((a, b) => (a[1] < b[1] ? -1 : 1));
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
