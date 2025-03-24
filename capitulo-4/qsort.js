const nums = [5, 1, 10, 25, -4, 31, 21];

function qsort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const pivo = arr[0];
	const men = [];
	const mai = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivo) men.push(arr[i]);
		else mai.push(arr[i]);
	}
	return [...qsort(men), pivo, ...qsort(mai)];
}

console.log(qsort(nums));
