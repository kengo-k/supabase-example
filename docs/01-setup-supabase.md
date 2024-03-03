# Supabaseのセットアップ

## 「New project」をクリックする
![](images/01/01.png)

## 下記の内容を設定し「Create new project」をクリックする

- Name: Todo App
- Database Password: 任意のパスワードを設定し控えておくこと
- Region: Northeast Asia (Tokyo)

![](images/01/02.png)

## 初期化が完了するまで待つ

![](images/01/03.png)

## 初期化が完了したら左メニューから「Authentication」をクリックする
![](images/01/04.png)

## さらに「Providers」を選択し認証方法の一覧からEmailの設定を変更し「Save」をクリックする

- Confirm email: OFF

![](images/01/05.png)

## 左メニューから「Table Editor」をクリックする

![](images/01/06.png)

## 「Create a new table」をクリックする

![](images/01/07.png)

## 下記の内容を設定して「Add foreign key relation」をクリックする

![](images/01/08.png)

## 下記の内容を設定して関連を保存する

![](images/01/09.png)

## テーブル作成の入力内容を確認しテーブルを作成する

※ Nameが未入力なのはミス。`todos`と設定すること

![](images/01/10.png)

## さらに下記の内容に従いテーブルを作成する(`notices`テーブル)

![](images/01/11.png)

## todosテーブルを開き`Insert`ボタンをクリックする

![](images/01/12.png)

## 下記内容を入力しレコードを追加する

- title: Task 1

![](images/01/13.png)

## さらにレコードを追加しテーブルの内容を確認する

![](images/01/14.png)

## 同様に`notices`テーブルにもレコードを追加する

![](images/01/15.png)

## 左メニュー「Project Settings」を開き、「API」サブメニューを開き、下記の内容を控える

- Project URL
- Project API keys

![](images/01/16.png)