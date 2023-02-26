const auth = function (req, res, next) {
  // ... perform some operations
  console.log("authentication process");
  next(); // next() を呼ぶことで Express はチェイン中の次のミドルウェア関数を呼びます。
};

export { auth };
