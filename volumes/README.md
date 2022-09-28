##### プロジェクト作成

```
npx create-next-app todo-app --typescript
```

##### ライブラリのインストール

```
yarn add @heroicons/react @supabase/supabase-js react-query zustand
yarn add -D tailwindcss postcss autoprefixer
yarn add -D prettier prettier-plugin-tailwindcss
```

##### tailwindの初期設定

```
npx tailwindcss init -p
```

##### サポートツールの設定

```
# importの順序を並び変えるprettierプラグイン
yarn add -D @trivago/prettier-plugin-sort-imports

# 不要importを表示するeslintプラグイン
yarn add -D eslint-plugin-unused-imports

# typescript用のeslintプラグイン
yarn add -D @typescript-eslint/eslint-plugin

#これ使ってるっけ？あとで確認していらないなら消す
yarn add -D eslint-plugin-import
```