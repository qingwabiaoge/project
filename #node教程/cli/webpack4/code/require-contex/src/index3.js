function importJs (r) {
    r.keys().forEach(r);
}

importJs(require.context('./dir', true, /\.js$/));
