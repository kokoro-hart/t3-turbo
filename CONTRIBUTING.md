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

[参考]

- [小規模開発チームのブランチ戦略。GitHub Flowの導入](https://techblog.insightedge.jp/entry/branch-strategy-github-flow)
- [GitLabにおけるソースコード管理は作業前に Draft Merge Request がオススメ](https://qiita.com/class_kouta/items/22ee58d3c72d2730c5a0)
