# Next13.4 AppRouter 勉強用リポジトリ

## インストールと立ち上げ

1. clone

```
git clone git@github.com:YuriKimura01/practice-app-router.git
```

3. パッケージのインストール

```
yarn install
```

3. Harvard Art Museums の apiKey取得

以下formよりapiKeyを取得し`hooks.ts`内のTODO箇所に記載

https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform

参考：https://github.com/harvardartmuseums/api-docs

4. local の立ち上げ

```
yarn dev
```

5. localhost にアクセス

```
http://localhost:3000
```

## 使用技術

- Next.js 13.4.10
- TypeScript 5.1.6
- clsx 2.0.0

## API

Harvard Art Museums：https://harvardartmuseums.org/collections/api
