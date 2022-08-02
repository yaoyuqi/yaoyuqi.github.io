+++
title = "最小生成树"
description = ""
date = 2022-08-02T15:49:05+08:00
featured = false
comment = false
toc = false
reward = false
categories = [
  "算法"
]
tags = [
  "graph"
]
series = []
images = []
+++

> 本文内容来自 Algorithhms 4th Edition

#### 中心思想
最小生成树的围绕Cut property这个概念展开。

所谓Cut property， 就是将一个图的顶点分成两部分，一条边如果连接的是不同部分的顶点，则这条边就叫cross edge
如果此时连接两部分的所有cross edge, 其中最短的这条就在mst上。

#### Prim
prim算法就是根据上面的定义来实现的。
如果我们把一个图的顶点想象成white , gray两色的点。初始时图中都是白点。
- 当我们将一个白点染成灰色，此时可以找到白-灰间的所有cross edge, 最短的那条属于mst. 
- 我们把这条边的另一头涂灰，同时将失效的cross edge去掉（方法就是在剩下的cross edge中去掉一头属于这个新添加的灰点的edge， 因为此时这些边的两头都是灰色，不再属于cross edge）
- 添加新的cross edge(就是查看这个新点的所有边，那些另一头仍然是白色的边)。
- 继续在这些边中找到最最短的边加入mst.
- 以此类推，知道所有的点都变灰

要实现上面点算法有几个要素。
1. 当新增一个点到mst时，能够找到所有新增的cross edge
2. 能够去掉ineligible cross edge
3. 在所有的cross edge中找到最短的那条

#### Lazy Prim
- boolean[] marked 来表示一个点是否已经被添加到mst(是否是灰色)
- Queue<Edge> mst 代表mst的所有edge
- MinPQ<Edge> pg 放置所有的cross edge

##### 算法描述
- 在marked中将第一个点标记为true, 同时将该点的所有edge添加入pg
- pg中取出min这条，将edge的另一头在marked中标记为true, 同时将这条edge加入mst
- 遍历新点的所有edge，如果edge的另一头为unmarked的，则加入pg
- pg中取出min, 如果这条edge的另一头已经marked ,说明这条edge失效了，我们再取一条
- 循环直到所有点都处理完

##### 算法缺点
缺陷就是在pq保存了cross edge以及大量失效的edge

#### Prim改良
改良的核心就是在pq中去掉失效的边
另一方面，如果点v此时是非mst点，但是其通过cross edge连接到了mst, 无论此时有多少条，我们最终需要的都是最短的那条。
因此每当我们将要连通一个新点时，只需要将连到该点的最短的edge添加到pq。 如果有更新，比如原先只有两条cross edge连到这个点，现在由于增加了新点，多了几条边到这个点，我们也只需要保留最短的一条即可。

由此数据结构调整
- edgeTo[v] 代表连接到v的最短的cross edge
- distTo[v] 代表当前mst到v的最短距离，即edgeTo[v]的weight, 初始为Double.POSITIVE_INFINITY
- marked[v]
- IndexMinPQ<Double> pq 索引即顶点的编号，val即cross edge 's weight, 最小的即是下条添加到mst的点

比较改良前，仍然用marked代代表已经添加的点，distTo[v]代表该点的最小weight，也就是edgeTo[v]中的weight
edgeTo保存的就是最终的mst(不包括edgeTo[0])
当新增一个cross edge, 如果该edge的权重小于distTo[v], 则在pq中更新



#### Kruskal算法
Kruskal的思路略有不同，但本质是一致的。将所有的边放到MinPQ里面，每次取出最小的一条，如果这条边与现有的mst的边不构成一个环，那么这条边就是mst的一条边，如此循环直到所有边添加完成。

证明的话也很直观，如果一条边不与现有的mst的边构成环，那么说明其两端不会都是属于同一个cut,意即此边是cross edge; 又由于其是现有的最小的边，那么其属于mst

##### 算法思路
- 将所有边放入pq, 每次取出最小的一条
- 如果这条边的两端是否已经连通（UF）: 如果连通则取下一条
- 否则将这天边放入mst， 同时将两点union

##### 与prim比较
两者都是贪婪算法的体现，prim从一个点开始，每次找出minimum cross edge, 新增一个点，然后继续添加
kruskal则从最短的edge开始一条条添加，只要不构成环。

从效率上来说prim会更搞笑一点，因为kruskal需要使用UF

