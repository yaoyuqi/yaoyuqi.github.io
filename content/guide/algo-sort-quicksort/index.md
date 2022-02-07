+++
title = "排序-快速排序"
description = ""
date = 2022-01-13T10:05:55+08:00
featured = false
comment = false
toc = false
reward = false
categories = [
  "算法"
]
tags = [
  "sort"
]
series = []
images = []
+++

> 本文内容来自 Algorithhms 4th Edition

快排由于实现起来简单，对各种类型的数据都有效，比大多数排序算法都效率高，因此可能是使用最广泛的排序算法。快排的两个显著特征：直接在数组上进行操作，不需要额外的内存；执行时间接近于NlgN, 同时结合这两点是其他算法（插入排序，选择排序，合并排序等）所不具备的。

并且由于快排使用更短的内循环次数，因此在实际使用中效率可能更好。
快排的缺点在于在实现中有许多细节需要考虑到，否则可能大大的降低效率。

### 实现
快排使用的是分治的思路，通过将数组分割成两个部分，然后独立的对两部分进行排序。