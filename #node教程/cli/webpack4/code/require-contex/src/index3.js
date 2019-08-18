function log (r) {
    r.keys().forEach(r);
}

log(require.context('./dir', true, /\.js$/));
