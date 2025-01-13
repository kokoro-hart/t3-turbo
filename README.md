# Project Name

## 開発・運用のルール

[CONTRIBUTING.md](./CONTRIBUTING.md)を参照

## 環境構築手順

### ☑️ 必要なもの

Node.js v20.18

バージョン管理にnvm(Node Version Manager)を利用している環境では、`nvm use`コマンドの実行で指定のバージョンに切り替わります。

```sh
nvm use
```

下記メッセージが表示された場合は、`nvm install 20.18`でインストールしてください。

```
Found '/パス省略/.nvmrc' with version <20.18>
N/A: version "20.18 -> N/A" is not yet installed.

You need to run "nvm install 20.18" to install it before using it.
```

### 環境変数の設定

`apps`以下の各ワークスペースの`.env.example` を `.env` という名前でコピーします。

```sh
# フロントエンド
cd apps/knowledge/frontend
cp .env.loc .env

# バックエンド
cd apps/knowledge/backend
cp .env.loc .env
```

### 依存パッケージをインストール

```sh
pnpm i
```

### 開発サーバーを起動

```sh
pnpm run dev
```

### UIパッケージのStorybookを起動

```sh
pnpm run storybook:ui
```

## 開発時によく利用するコマンド

※`workspaceName`は`package.json`のnameを参照

| コマンド                                          | 動作                                            |
| :------------------------------------------------ | :---------------------------------------------- |
| `pnpm i`                                          | すべてのworkspaceの依存パッケージをインストール |
| `pnpm run dev`                                    | すべてのworkspaceの開発サーバーを起動           |
| `pnpm add -Dw {packageName}`                      | すべてのworkspaceの依存パッケージを追加         |
| `pnpm add --filter={workspaceName} {packageName}` | 個別のworkspaceの依存パッケージを追加           |
| `pnpm run clean:workspaces`                       | すべてのworkspaceをクリーンアップ               |
| `clean:workspaces`                                | すべてのworkspaceをクリーンアップ               |
