function fn (r) {
    r.keys().forEach(r);
}

fn(require.context('./dir', true, /\.js$/));
