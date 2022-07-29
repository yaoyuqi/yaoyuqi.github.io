+++
title = "无向图"
description = ""
date = 2022-07-29T10:00:25+08:00
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

所谓图，就是有一些顶点和边组成。

#### 基本术语
- path
- degree
- subgraph
- simple path
- cycle / simple cycle
- connected
- acyclic
- tree: an acyclic connected graph
- forest
- spanning tree (of a connected graph)

#### 数据结构
在考虑图的数据结构时，需要满足两个方面
- 空间上能够存储
- 图的方法（此处主要指adj()）能够在有限的时间完成

由此，对于以下方式
- 二维数组，g[i][j] = true代表i ->j ： 太耗费空间；无法提供paralle edge的表达
- 数组Edge[] : adj()需要遍历整个图才能得到
- Array of Adjacency lists : Bag[], 每个元素保存从该点出发的边

#### dfs
有了图的基本数据结构， 第一个重要的算法就是判断两个点是否相连。
实现这个目的，我们可以用Union Find算法， 其思路就是每个点通过edge找到与其相连的最小的点。 判断两个点是否相连就是看其最小点是否相同。
更好的方式使用Depth-first search
##### 迷宫探索
如果以迷宫探索来类比，
- 从入口开始，牵一根线
- 走过的路径和交叉点都标记出来。
- 当碰到标记过的交叉口，就顺着线退回来
- 如果在一个交叉点没有位标记过的路径可以探索，就继续回退

Union Find可以确定两点是否连接，但是无法找到连接的路径。

##### 查找路径
DepthFirstPath 核心就是保存了每一次dfs中联通的edge的记录。
```java
void dfs(Graph g, int v) {
  marked[v] = true;
  for (int w: g.adj(v)) {
    if (!marked[w]) {
      edgeTo[w] = v; //由于是无向图，因此edgeTo[w] = v可以代表为从v->w
      dfs(g, w);
    }
  }
}
```

要查找路径，就是从终点开始反推，直到起点
```java
Iterable<Integer> pathTo(int v) {
  if (!hasPathTo(v)) return null;
  Stack<Integer> path = new Stack<>();
  for (int x = v; x != s; x = edgeTo[x]) {
    path.push(x);
  }
  path.push(s);
  return path;
}
```

#### bfs
Breadth-first search 处理单点的最短路径
dfs类比一个人探索迷宫，而bfs则好比一群人探索。当碰到分支，则分出部分人去探索，当两个分支合并，则这些人也随之合并。
dfs的本质是使用stack（系统提供了递归）来保存探索的路径，而bfs则使用fifo(queue)
```java
void bfs(Graph g, int s) {
  Queue<Integer> queue = new Queue<>();
  marks[s] = true;
  queue.enqueue(s);
  while(!queue.isEmpty()) {
    int v = queue.dequeue();
    for (int w : g.adj(v)) {
      if (!marked[w]) {
        queue.enqueue(w);
        edgeTo[w] = v;
        marked[w] = true;
      }
    } 
  }
}
```

#### Component Connectivity
探索了图中的点的联通和路径，接下来就需要探索一个图中有几个component. 
CC的实现很巧妙，当用DFS探索时，如果一个图是完全联通的，那么我们在不断的递归过程中一定能够探索完所有的点。
反之，如果递归调用一次dfs后，我们发现graph中仍然有点点状态是unmarked， 那说明这个点属于另一个component
我们用id()来代表不同的component
```java
class CC {
  boolean[] marked;
  int[] id;
  int count;

  CC(Graph g) {
    marked = new boolean[g.v()];
    id = new int[g.v()];
    for (int s = 0; s < g.v(); s++) {
      if (!marked[s]) {
        dfs(g, s);
        count++;
      }
    }
  }
  void dfs(Graph g, int v) {
    marked[v] = true;
    id[v] = count;
    for (int w : g.adj(v)) {
      if (!marked[w]) {
        dfs(g, w);
      }
    }
  } 
}
```

#### Cycle Detection && Two Color
##### Cycle
DFS是探索图的一个核心。有了dfs, 要探索图中是否有环，思路就是在dfs递归过程中，如果发现某个点已经标记过，而这点又是从连接的另一头又不是当前探索的点， 那么就说明有了环。
这里涉及到了三个点： 探索的点v, 走到这个点的出发点u, 以及可以从v出发去探索的点 w. 如果此时发现w已经被标记过，而且u != w, 那么就可以明确，绕回来了。
##### Two Color
two color解决的是bipartite graph(二分图)的问题，说白了就是图中的任何一个点，如果是黑色，那么与其相邻的点都是红色。
作用：

>二分圖廣泛應用於編碼理論中，尤其常應用在收到從通道傳來的訊息之後解碼過程中。常見的例子有坦納圖和因子圖。坦納圖是一個二分圖，其中一個獨立集蒐集所有> 的一個碼字裡可以放數碼的位置，另一個獨立集則包含一些可以放數碼的位置的組合，其中每個組合代表一個碼字所該符合的限制──那些位置的數碼加起來總和是 0[34]，而連邊就代表了屬於。因子圖則與低密度奇偶檢查碼及渦輪碼的機率解碼中所用到的貝氏網路密切相關[35]。

>在電腦科學中，佩特里網是一個數學工具用來分析及模擬並行計算，它將系統模擬成一個有向二分圖，其中一部分的頂點被稱為「位置」節點，包含一些資源，另一部分的頂點被稱為「事件」節點，消耗或生產資源，節點和邊之間的關係還有一些限制，這些限制來自系統本身的限制。佩特里網藉由有向二分圖的性質讓系統的行為可以用數學來證明，並且讓系統的模擬容易被執行[36]。

>在射影幾何中，列維圖是一個二分圖，描述幾何構形中點跟邊的關係。頂點的兩部分分別對應到構形的點跟邊，圖中兩頂點之間連邊若且唯若構形中的邊通過點，因為兩條邊頂多交於一點，或者說，兩點決定唯一一條邊，所以列維圖中不存在長度為 4 的環作為子圖，換言之，列維圖的圍長大於等於 6[37]。


#### Symbol Graphs
已电影目录为例子，包括电影名称和演员，那么这些电影名称和演员就可以组成一个Symbol Graph, 注意这个graph是二分图，因为不会有两个电影或两个演员相连。
Symbol graph其实就是一个普通的graph + 数组。其中数组保存了symbol（比如电影名和演员名），数组的索引就是graph中的点。

#### 应用 DegreesOfSeparation
Graph的一个重要应用就是研究两点之间的分离度，例如分析两个人之间通过多少人才联系起来的从而得到这两个人的亲密度。
这个问题其实可以归结为寻找两点之间的最短路径，因此Symbol Grapsh配和BFS即可实现。

#### 总结
- 在Graph的处理中，我们通过构造函数讲图进行预处理，创建出可以快速得到结果的数据结构，这种思路只得学习。
- 图的处理的关键是DFS和BFS,在两个搜索方式的基础上，可以实现DepthFirstPath/BreadthFirstPath， 来过去两点间连接路径。
- CC则是在DFS上明确Graph中的Component
- Cycle是在DFS上判断是否图中有环
- TwoColor是在DFS上判断图是否为Bipartite Graph
- 由Graph + array 则可包装出Symbol Graph
- Symbol Graph + BreadthFirstPath可以研究两点间的分离度 DegreesOfSeparation



