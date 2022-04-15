---
title: 'fish で追加されているパスを表示する方法'
date: '2022-04-15'
ogImage:
  url: '/assets/og_logo.png'
---
メモです。

# 結論
```
printf '%s\n' $fish_user_paths
```
### 解説
fish のパスは `fish_user_paths`という名前の環境変数に格納されている。
特定のパスを指定したい場合は `fish_user_paths[1]` のようにインデックスアクセスすることで実現できる。

これはユニバーサル変数であり、すべてのセッションで共有される。
ちなみに格納場所は `~/.config/fish/fish_variables` にある。**※直接編集は厳禁**


# 参考
[fishで「パスを通す」ための最終解答 - Zenn](https://zenn.dev/estra/articles/zenn-fish-add-path-final-answer)