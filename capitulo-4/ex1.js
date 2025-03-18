const nums = [4, 7, 8, 11, 25];

function soma(nums) {
    const arr = [...nums]
	if (arr.length == 0) return 0;
	return arr.shift() + soma(arr);
}

console.log(soma(nums));
console.log(nums);
