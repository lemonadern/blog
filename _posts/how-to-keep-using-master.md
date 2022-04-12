---
title: '頑なにmaster を使い続けるための手引'
date: '2022-04-12T10:48:57'
ogImage:
  url: '/assets/og_logo.png'
---

Git / GItHub におけるデフォルトブランチの設定は、 `master` から `main` へと変化している。

これは「奴隷制を想起する言葉（master - slave など）を使わないようにしよう」という啓蒙活動の影響を受けた流れだそう。

しかしブランチの命名は各デベロッパの自由なので、設定次第ではオレオレ命名をストレスなく利用し続けられる。この記事には、頑なに `main` ではなく `master` （または任意の好きな名前）を利用したいひとのための操作をまとめておく。

**この記事は、いかなる政治的主張も含んでいません。**

# 既存の main ブランチを master ブランチに変更する

ブランチをリネームすればよい

```bash
git branch -m main master
```

# デフォルトブランチの設定を確認する

git init されたときに main にされたら、いちいちリネームするのは面倒なので、設定を確認する

## git

ローカルのgit

### 今の設定を確認

```bash
git config init.defaultBranch
```

### この設定を変更

```bash
git config --global init.defaultBranch master
```

デフォルトで master になる

意識の高い人は 同じ方法で main にしよう

## GitHub

自分のアイコンのとこのドロップダウンから `Settings` 

`Repositories` → `Repository Default Branch` を master に変更

これで勝手にmainにならない