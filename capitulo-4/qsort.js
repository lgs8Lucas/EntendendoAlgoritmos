const nums = [5, 1, 10, 25, -4, 31, 21];

function qsort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const pivo = parseInt(arr.length / 2);
	const men = [];
	const mai = [];
	for (let i = 0; i < arr.length; i++) {
		if (i == pivo) continue;
		if (arr[i] < arr[pivo]) men.push(arr[i]);
		else mai.push(arr[i]);
	}
	return [...qsort(men), arr[pivo], ...qsort(mai)];
}

console.log(qsort(nums));
