function camelCaseKeys(collection) {
    // write your code below
    let ans = {};
    if (!collection) {
        return collection;
    }
    if (Array.isArray(collection)) {
        return collection.map((collect) => camelCaseKeys(collect));
    }

    for (let key in collection) {
        if (typeof collection[key] === 'object') {
            let newKey = key.split('_');
            let newKey2 = newKey[1][0].toUpperCase() + newKey[1].slice(1);
            let finalKey = newKey[0] + newKey2;
            ans[finalKey] = camelCaseKeys(collection[key]);
        }
        else {
            let newKey = key.split('_');
            let newKey2 = newKey[1][0].toUpperCase() + newKey[1].slice(1);
            let finalKey = newKey[0] + newKey2;
            ans[finalKey] = collection[key];
        }
    }

    return ans;
};

//   camelCaseKeys([
//     { total_questions: 200 },
//     { total_users: 10000, social_handles: { youtube_channel: 'youtube.com/devtoolstech' }}
//   ]);
