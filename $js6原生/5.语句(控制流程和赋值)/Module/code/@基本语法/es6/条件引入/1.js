

if (true) {
    import('./ex.js').then(({a})=>console.log(a));
} else {
    import('./ex2.js').then(({b})=>console.log(b));
}
