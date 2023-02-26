## 初期

npm init

## ライブラリ

npm install express --save
npm install eslint --save-dev
npm install morgan

## ci

npm init @eslint/config
package.json に以下を追記

```
"lint": "eslint src/*"
```

## esm

package.json に以下を追記

```
"type": "module",
```
