const nums = [4, 7, 8, 11, 25];

function maior(arr) {    
	if (arr.length <= 1) return arr[0] || 0;
	const temp = [...arr];    
	const pri = temp.shift();
	const seg = maior(temp);
	return pri > seg ? pri : seg;
}

console.log(maior(nums));
