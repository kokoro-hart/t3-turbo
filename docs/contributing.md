# Contributing to this project

## ブランチ運用

- 当面は [GitHub Flow](http://b.pyar.bz/blog/2014/01/22/github-flow/)

## ワークフロー

GitLab 上でアサインされたissue、taskを優先度順に対応する

1. アサインされた課題の確認、調査、方針の策定
2. mainブランチからfeatureブランチを切り、Draft Merge Request を作成。
   - 検討事項や疑問点・不安などあれば、SlackやDraft Merge Request のコメントで他のメンバーにメンションし、意見を求める
3. 実装完了後、Merge Request を Open してレビュー依頼
4. レビュー（と必要なら意見の取り込み）が終わったら GitLab オンライン上でマージ。マージ元のブランチは削除する。
5. GitLab上で課題をクローズ。おおよその対応時間を「Time tracking > Time spent」欄に入力しておく

```sh
# mainブランチの最新コードを取得
git pull origin main

# featureブランチの作成
git switch -C feature/{issue or task}_{番号}

# 空コミットして Draft Pull Request を作成
git commit --allow-empty -m 'start feature/awesome-feature'
git push origin feature/awesome-feature
```

### レビュー前にやること

- 開発環境でリンター/フォーマッターの実行・動作確認を完了させます。
- PRのスコープが適切か再確認します。
  - 機能追加と同時に大幅なリファクタリングを行うと変更量が多くなります。機能追加・リファクタリングそれぞれで分割PRによる対応を検討してください。

### レビュー後にやること

- レビューによるコードの修正、変更を行なった場合は再度動作確認を行います。
- Merge でマージします。必要に応じてDelete source branch：マージ後にマージ元ブランチを削除します。

## コミットメッセージ

コミットメッセージの形式は厳格には決めていないが、

- コミットプリフィックスを使用
- スコープを記述しておくと ○

例
```
- feat: ui: 汎用Popoverコンポーネントを作成
- change: frontend: デフォルトで最新のタスクを上部に表示したい要望があり、タスク一覧のデフォルトソート降順(desc)に変更
- fix: frontend: ユーザ情報編集ができないお問い合わせがきたので、ユーザ情報編集完了後の遷移先を間違えているバグを修正
- style: backend: インデントの誤りがあったので揃えた
```

【プリフィックスの例】
- `chore:` 雑事（カテゴライズする必要ないようなもの）
- `docs:` ドキュメントの変更
- `update:` 既存の機能に問題がないが、修正を加えたい場合
- `feat:` 新しい機能やファイルの追加
- `change:` 仕様変更により、既存の機能に修正を加えた場合
- `fix:` バグ修正
- `perf:` パフォーマンス最適化
- `refactor:` リファクタリング
- `revert:` コミット取り消し（git revert）
- `test:` テストの追加

## 参考リンク

- [小規模開発チームのブランチ戦略。GitHub Flowの導入](https://techblog.insightedge.jp/entry/branch-strategy-github-flow)
- [GitLabにおけるソースコード管理は作業前に Draft Merge Request がオススメ](https://qiita.com/class_kouta/items/22ee58d3c72d2730c5a0)
- [gitにおけるコミットログ/メッセージ例文集100](https://gist.github.com/mono0926/e6ffd032c384ee4c1cef5a2aa4f778d7)
