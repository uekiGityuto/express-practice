## 初期

npm init

## ライブラリ追加

npm install express --save
npm install eslint --save-dev
npm install morgan

## esm 対応

package.json に以下を追記

```
"type": "module",
```

## ci 追加

npm init @eslint/config
package.json に以下を追記

```
"lint": "eslint src/*"
```

`.vscode/setting.json`を作成して以下を記載

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
