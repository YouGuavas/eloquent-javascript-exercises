function flatten(arr) {
	var newArr = arr.reduce(function (a, b) {
		return a.concat(b);
	})
	console.log(newArr);
}
flatten([[0, 1], [2, 4]]);
