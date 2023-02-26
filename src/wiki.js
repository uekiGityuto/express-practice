// wiki.js - Wiki ルートモジュール

import express from "express";
const router = express.Router();

// ホームページルート
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// about ページルート
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

export { router };
