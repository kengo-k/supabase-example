# プロジェクトの作成

nodeはインストール済みの前提とする。

※ nodeイメージを使用する場合はインストール済み

## NextJsプロジェクトの作成

- 道中の質問には全てYesで進める

```bash
$ npx create-next-app todo-app --typescript

✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /app/todo-app.
```

## 作成したプロジェクトを起動する

```
$ npm run dev
npm run dev

> todo-app@0.1.0 dev
> next dev

   ▲ Next.js 14.1.1
   - Local:        http://localhost:3000
```

![](images/02/01.png)

## 依存ライブラリを追加する

```
$ npm install --save @heroicons/react @supabase/supabase-js react-query zustand
```

tailwind用のサポートライブラリ(tailwindのクラス名をソートしてくれるprettierのプラグイン)をインストール。

```
$ npm install -D prettier prettier-plugin-tailwindcss
```

## 環境変数を定義したファイルを追加する

プロジェクトのルート階層に下記の内容で`.env.local`を作成する

```
NEXT_PUBLIC_SUPABASE_URL=<前回のSupabase初期設定で控えたURL>
NEXT_PUBLIC_SUPABASE_API_KEY=<前回のSupabase初期設定で控えたAPI Key>
```