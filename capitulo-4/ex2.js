const nums = [4, 7, 8, 11, 25];

function count(arr) {
    if (!arr[0]) return 0;
    const temp = [...arr];
    temp.pop();    
    return 1+count(temp);
}

console.log(count(nums));
