---
slug: git-rebase-command
title: 巧用 git rebase 命令
authors: skyler
description: 使用git rebase 命令，让你的commit变得整洁
tags: [git, 技术]
---

## git rebase 是？

简单来说，`git rebase` 是用来规范你的 commit 信息，让你的 commit 信息尽可能的是一条直线。

## 举个例子 1: 合并 commit

我们在多人进行项目开发的时候，通常会基于主分支代码拉去一个分支，进行功能开发，可能会产生这样的 commit 信息，部分 commit 信息遵循了 git 代码提交规范，另一部分可能是漏提了一部分代码导致的补充提交。实际上只有两三个有用的 commit 提交，但是可能会产生五六个甚至更多的提交信息，这样的话如果把代码合入主分支，也会造成 commit 信息混乱，如果想回退到某一个历史版本会很头疼，根本不知道要回退到哪个版本。

<!-- truncate -->

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-09-05-17-PeGCxP-fAouQk.png)

这种情况下，我们可以在分支代码合入主干之前，使用 `git rebase` 对 commit 信息进行合并或者修改。

看下图，以此为例子，让我们使用 `git rebase` 来规范合并和修改 commit 信息吧

![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-09-05-17-OxKQsc-9r4YER.png)

1. 我们选择合并前三个 commit 为一个 commit

   `git rebase -i HEAD~3`

   也可以使用 `git rebase -i [start-commit-id] [end-commit-id]` 命令，选择对应的区间

   :::note
   注意 commit-id 范围的选择是一个前开后闭的区间，end-commit-id 可以不写，默认到最新的 commit
   :::

2. 输入完命令之后会出现以下的信息

```shell
pick cc9bb62 add a   # 第一次的commit
pick 8566c3e add b   # 第二次的commit
pick 63be917 add c   # 第三次的commit

# Rebase 643bf9c..63be917 onto 643bf9c (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified); use -c <commit> to reword the commit message
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

一般我们常使用的是 `pick` 和 `squash`

3. 修改信息并进行下一步

```shell
p cc9bb62 add a
s 8566c3e add b
s 63be917 add c
```

会出现如下信息，对 commit 信息进行修改即可

```shell
# This is a combination of 3 commits.
# This is the 1st commit message:

add a

# This is the commit message #2:

add b

# This is the commit message #3:

add c

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Sep 5 17:20:12 2022 +0800
#
# interactive rebase in progress; onto 643bf9c
# Last commands done (3 commands done):
#    squash 8566c3e add b
#    squash 63be917 add c
# No commands remaining.
# You are currently rebasing branch 'rebase-branch' on '643bf9c'.
#
# Changes to be committed:
#       new file:   a
#       new file:   b
#       new file:   c
#
```

可以看到我们的 commit 信息已经合并为一个了。
![](https://cdn.jsdelivr.net/gh/Skylerliutian/oss-img@main/uPic/2022-09-05-17-vtRqCI-exfHN6.png)

注意 commit 信息是按照提交顺序输出的。如果我们按照这个命令来修改记录的话。

```shell
s cc9bb62 add a
s 8566c3e add b
p 63be917 add c
```

会出现 `error: cannot 'squash' without a previous commit` 的错误，这是因为 `s cc9bb62 add a` 的意思为 把这一条 commit 信息和之前的一条 commit 信息进行合并，但是上一条的 commit 信息已经提交，也就是已经在远程分支上了，所以不能合并这条信息，并报错。

:::note
注意不要合并已经提交的 commit 信息。
:::

## 举个例子 2: 分支合并

场景介绍，

1. 基于 master 分支现版本拉取了一个新的分支 dev。
2. 接下来，同事可能会对 master 版本代码进行了一个 hotfix，此时 master 分支代码会存在 dev 分支中没有的代码，会领先于 dev 分支。
3. 此时，如果 dev 分支上的功能开发完成后，想要合入 master 分支，首先会同步 master 分支的代码 `git merge master`，通过这种方式，commit 信息中会产生一条 merge 的 commit。
4. 使用 `git rebase master`，不会产生关于 merge 的 commit，可以使 commit 信息更加的清爽。
5. `git rebase` 的原理是：
   - 先取消掉 dev 的变化
   - 将上述的操作临时保存为 patch 文件，保存到 .git/rebase 目录下
   - 将 dev 分支 更新为 最新的 master 分支
   - 再将 patch 文件应用到 dev 分支上
6. rebase 过程中如果出现了 conflict，解决冲突后，使用 `git add` 来更新，直接执行 `git rebase --continue` 即可。
