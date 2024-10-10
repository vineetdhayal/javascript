function solve(s, i, f) {
    if (i === s.length) {
        console.log(f);
        return;
    }
    f = f + s[i];
    solve(s, i + 1, f);
    f=f.slice(1);
    solve(s, i + 1, f);
}

solve('abc', 0, '');
