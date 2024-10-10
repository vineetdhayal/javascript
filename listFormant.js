export default function listFormat(items, options) {
    const separator = ', ';
    const otherSeparator = ' and ';
    const otherLabel = 'other';

    const newItems = items.filter((item) => !!item);
    if (!newItems || !newItems.length) {
        return '';
    }
    if (items.length === 1) {
        return items[0];
    }
    if (options.sorted) {
        items.sort();
    }
    if (options.unique) {
        items = [...new Set(items)];
    }
    if (options.length && options.length > 0 && options.length < items.length) {
        const first = items.slice(0, options.length).join(separator);
        const rem = items.length - options.length;
        const second = `${rem} ${otherLabel + (rem > 1 ? 's' : '')}`;
        return [first, second].join(otherSeparator);
    }
    const first = items.slice(0, items.length - 1).join(separator);
    const second = items[items.length - 1];
    return [first, second].join(otherSeparator);
}


//   listFormat([]); // ''

// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// // 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'