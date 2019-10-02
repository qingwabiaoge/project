export default(n, m) => {
  const random = Math.floor(Math.random() * (m - n + 1) + n);
  return random;
}
