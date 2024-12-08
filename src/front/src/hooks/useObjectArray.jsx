import { useState } from "react";
import { v4 as uuid } from "uuid";

const nextValue = (base) => Object.assign({ id: uuid() }, base);

export default function useObjectArray({
	entries,
	oneNeeded = false,
	initialMaxLength,
}) {
	const [maxLength, setMaxLength] = useState(initialMaxLength);
	const defaultObject = {};
	entries.forEach((key) => (defaultObject[key] = ""));

	const [array, setArray] = useState(
		oneNeeded ? [nextValue(defaultObject)] : []
	);

	function addOne() {
		console.log(maxLength);
		if (maxLength === undefined || array.length < maxLength)
			setArray([...array, nextValue(defaultObject)]);
	}

	function removeOne(id) {
		setArray(array.filter((value) => value.id !== id));
	}

	function removeLast() {
		removeOne(array[array.length - 1]?.id);
	}

	function modifyOne(id, [key, value]) {
		const result = Object.assign([], array);
		const target = result.find((value) => value.id === id);
		target[key] = value;

		setArray(result);
	}

	return {
		array,
		addOne,
		removeOne,
		removeLast,
		modifyOne,
		setMaxLength,
	};
}
