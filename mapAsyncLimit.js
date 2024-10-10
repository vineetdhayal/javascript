export default async function mapAsyncLimit(iterable, callbackFn, size) {
    let curr = 0;
    let results = [];
    if (!iterable || !iterable.length) {
        return Promise.resolve([]);
    }
    if (!size) {
        size = iterable.length;
    }
    for (let i = 0; i < iterable.length; i += size) {
        const chunk = iterable.slice(i, i + size);
        const chunkResults = await Promise.all(chunk.map(callbackFn));
        results = [...results, ...chunkResults];
    }

    return results;
}

//Approach 2

export default function mapAsyncLimit(iterable, callbackFn, size) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolved = 0;
        let nextIndex = 0;

        if (!size) {
            size = iterable.length;
        }

        if (iterable.length === 0) {
            resolve([]);
            return;
        }

        async function processItems(index: number) {
            nextIndex++;
            try {
                const result = await callbackFn(iterable[index]);
                results[index] = result;
                resolved++;
                if (resolved.length === iterable.length) {
                    resolve(results);
                    return;
                }
                if (nextIndex < iterable.length) {
                    processItems(nextIndex);
                }
            }
            catch (err) {
                reject(err);
            }
        }

        for (let i = 0; i < Math.min(iterable.length, size); i++) {
            processItems(i);
        }
    })
}
