# My Blog
Next.jsとTypeScriptを使用して作成したブログです。

MicroCMSを使ってコンテンツを管理しています。

このブログは下記を参考に作らせていただきました。

[Next.js Blog with microCMS](https://vercel.com/templates/next.js/nextjs-blog-with-microcms)

[Github](https://github.com/microcmsio/simple-blog-with-microcms)

# 環境
next.js         : 14.1.0

react           : 18.2.0

microcms-js-sdk : 3.1.0

TypeScript      : 5.4.5

※詳細は`package.json`をご確認ください。

# 機能
・ MicroCMSで投稿したブログの一覧表示

・ MicroCMSで投稿したブログの詳細表示

・ ページネーション

・ ブログ記事のタグ機能

・ ブログ記事の検索機能

・ aboutページ

・ Google Analytics

# インストールと実行
1. リポジトリをクローンします。
2. npm installを実行して依存寒けにをインストールします。

  ※必要に応じて、パッケージのインストールを行ってください。

3. `.env.local`ファイルを作成し、MicroCMSのAPIキーとドメイン、ベースＵＲＬを設定します。
```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
```

  ※必要に応じて、Google AnalyticsのIDを追加してください。

4. npm run dev を実行して開発サーバを起動します。

# お問い合わせ
質問やフィードバックがありましたら、お気軽に[Issues](https://github.com/mardev-K/next-microcms-blog/issues)をご利用ください。




