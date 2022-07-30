+++
title = "有向图"
description = ""
date = 2022-07-29T14:37:46+08:00
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

#### Glossary
- Directed Graph / Digraph
- directed path
- directed cycle / simple cycle

#### 数据结构
Digraph的结构与Graph类似，除了Adjacency List指保留 w->v的连接， 而graph则同时保存w->v和v->w
另外Digraph增加了reverse()方法，其返回这个图的拷贝，只是将所有的w ->v 变成的v -> w. 这么做是因为有时候在处理中需要找到所有到v的边

#### Reachability
同样适用DFS来完成。
应用： 一个应用场景就是内存回收，通过定期扫描现有的引用，通过DFS将所有连接的引用标记出来， 剩下的未标记的引用则可以被回收

#### 寻找路径
跟Graph相同，Digraph使用DFS查找路径， BFS查找最短路径

#### Cycle && DAGs (Directed Acyclic Graphs)
在Digraph中要判断是否有环，如果没有计算机的帮助是很困难的。一个Digraph中可能有大量的环，我们主要的关注点在于部分的环，或者有时只关心到底这个图有没有环（DAG）
一个应用场景就是作业调度，其包含各种限制，其中一个重要的限制就是每个job的先行条件(precedence constraints) 。 以学生选课为例，有些课必须要已经选修了特定的课程才能选择，如果进一步限制一个学生同时只能上一门课，那么这个问题就演变为Precedence-constrained Schedule(优先约束的调度) -> 也就是建立于Topological Sort(拓扑排序)之上
##### Topological sort
在Digraph中，将所有的点按照边的指向从先到后排列。
典型的需要Topological sort的应用有： 作业调度， 课程调度，继承（Java class）, SpreadSheet, 符号连接

如果图中有环，例如 a,b,c，那么我们无法按照topological sort的方式排列， 由此推导出很重要的一点就是对digraph中cycle的判断。
Digraph的环判断思路：
当我们用DFS探索的时候，将当前路径的点保存在数组中， 如果我们探索一个新的点，而这个点已经保存了，则发现了环。当一条路走完，我们往回退的过程中则把这条路上的点从保存的数组中抹去，然后在新的方向继续重复操作。
代码层面
```java
boolean marked[];
int[] edgeTo;
boolean[] onStack
Stack<Integer> cycle;
void dfs(Digraph g, int v) {
  onStack[v] = true //每次调用dfs，相当于我们走进了一条新路，
  marked[v] = true;
  for (int w : g.adj(v)) {
    if (hasCycle()) return;
    if (!marked[w]) {
      edgeTo[w] = v;
      dfs(g, w);
    }
    else if (onStack[w]) { //当发现点保存过，则发现了环
      cycle = new Stack<>();
      for (int x  = v; x != w; x = edgeTo[w]) {
        cycle.push(x);
      }
      cycle.push(w);
      cycle.push(v);
    }
  }
  onStack[v] = false; //精髓，当退出dfs时，相当于一条路探索完了，我们把这条路上的点抹去
}
```

##### 一个有向图可以拓扑排序当且仅当这个图时无环图（DAG）

##### Preorder / PostOrder/ Revese PostOrder
- Preorder: 在调用dfs前将点放入队列
- Postorder: 在调用dfs后将点放入队列
- Reverse Postorder: 在调用dfs后将点放入栈

而topological sort就是调用reverse postorder得到的序列

##### job-scheduling 的处理流程
- 明确task和所有的前置条件
- 通过判定是否有环来明确是否存在解决方案。 如果有环，可以考虑如何消除环
- 用Topological sort来生成调度计划

#### Strong Connectivity
在有向图中，两个点是强连接指两个点相互连通。由此可以看出，两个点是否强连接就是看这两点是不是在一个环里。
强连接的平等特性促使其有以下特征
- 自反性： 每个点对于其自身都是强连接
- 对称性： 如果w强连接到v, 则v也相连接到w
- 传递性

##### Strongly connected components
一个图中，每个包含最大相连接的点组成的字图就叫Strongly component. 图中的每个点都只属于一个Strongly Component. 一个DAG有V个Strongly Component. 
注意：Strongly component 关注的是顶点而不是边。因此每个点只能属于一个Strongly Component中，而一个边可能连接一个，也可能跨区域连接
对于无向图，我们用CC来研究，对于有向图，我们用Strongly Component来研究。
Strongly components对于研究有向图的构成很有用，每个component中的点都是强关联的。例如对于教材，作者根据topics来分组。 对于软件开发，可以用来划分模块。更好的例子是食物链，通过捕食者与被捕食者的连接我们可以划分出不同的生态圈。
##### Kosaraju's 算法
通过Kosaraju算法来得到Strongly Components,步骤如下
- 通过DepthFirstOrder对一个Digraph的**reverse**得到其reverse post order(GR)
- 在Digraph上运行dfs, 但是顺序是按照上面得到的GR来
- 由于是对每个顶点一个个分别执行dfs, 如果在一个顶点中执行dfs递归碰到的所有点就是该点的Strongly Connectity.
简单理一下为什么可以得到：
在探索的时候，对于一个环，可能会有一个或多个点点进入这个环，然后这个环从一个或多个点走出去。假设这些进入的点和出去点都属于其他的Strongly Component，那么我们要在一次dfs中只访问这个环中的内容，唯一的办法在这个dfs之前已经探索过所有的出口的点，执行dfs探索完这个环，最后探索所有入口的点。如果a,b代表入口点，C代表环，d,e代表出口点，图a/b->C->d/e的探索顺序必须是d/e->C->a/b, 其他顺序都会导致错误，例如我们探索完d/e后探索a,dfs会将aC一起探索了，从而得到aC是Strongly Component的错误结论。 进一步来说，如果每个Strong Component都看作环，只要确保所有的环都是先探索出口即可满足条件

**关键就是探索的顺序必须是出口的点->环本身-**
post order的特征是远的点在前，用这个顺序可不可以呢。答案是不行。

~~在有环的时候，如上面a/b ->C ->d/e的图中，如果此时在C里面进行dfs探索，无法保证下一步是先探索d/e还是继续在C中走，从而出现可能先把C的点都探索完了，然后再探索d/e的情况。（可以想像成环在起点断开了，此时环的剩余点也构成了一道分支，到底dfs走哪一路就跟图中点的位置相关了）。~~

对于有环的有向图，post order的顺序是不确定的，会出现不相关的两个环，其中一个点在前，然后不相关的环的点在后的情况。 但是post order可以保证两点
1. 如果一个点在环中，从这个点有路径走出，那么无论安什么方向遍历，这个点一定排在走出的点后面。
2. 如果一个点在环中，从这个点有路径走入，那么无论安什么方向遍历，这个点和点所在的环一定排在走入的点前面。 （假设从环的外面开始遍历，走到入口的点，那么必然会继续走进环，自然就会走完环然后逐步退出， 此时环点在前，入口的点在后；如果是环开始遍历，由于入口点没法走到，所以也是环点在前，入口点在后）
由第一条可以看出，如果一个环有多个出口，我们用post order无法保证所有的出口的点都在环的点前面。

但是如果先把图反转，对于环来说还是环，但是对于所有的入口就都变成了出口，而出口就变成了入口。那么此时post order的第二条规律可以保证环的点在所有入口点的前面，反之则变成出口的点在环的点前面，达成目标。

对于order, **一定参看[这篇文章](https://eli.thegreenplace.net/2015/directed-graph-traversal-orderings-and-applications-to-data-flow-analysis/)**

###### 官方证明
- 首先证明在一组递归dfs中碰到的点都是在一个Strongly Component中。 这里使用反证法。假设点v是与dfs(G, s)强连接但是又不能被dfs(G, s)访问到的，那么必然v在之前的组的dfs遍历中被标记了。由于s,v是强连接，那么之前组的dfs访问到v的时候必然会访问到s, 因为那时s也没被标记。如果那样，s点开始dfs组会被跳过。由此产生矛盾。
- 接着证明如果dfs(G, s)访问到点v, 那么点v与点s是强连接的。由于dfs(G,s)能够访问到v,说明有路径s->v， 那么只需要证明存在v->s的路径即可。换句话说就是在GR(G的reverse)中存在s->v。 由于我们是按照GR的RPO顺序遍历的，s在v的前面，那么在GR中dfs(G, v)先于dfs(G, s)结束，于是可分为那种可能
  1. dfs(G,v)先于dfs(G,s)开始，并且在dfs(G, s)开始调用前结束。
  2. dfs(G,v)后于dfs(G,s)开始，并且在dfs(G, s)结束前结束。
  由于G中明确了又s->v, 那么GR中必然有v->s, 所以1不可能，由2可以推测出在GR里面有s->v。

#### 重新回顾Reachability
- 对于无向图，通过CC我们判断出有多少个Components,而Component内是相连的，不同的Component是不相通的，从而可以判断出对于任何任何点v,w是否相连
- 对于有向图，通过KosarajuCC我们可以得到Strongly Components, 从而判断v,w是否强连接，即v->w && w->v。但是对于不是强连接的点，我们无法判断其是否想通
由此引出了一个判断任意点是否相连的问题
无向图通过CC, 通过linear time process, 可以在constant time得到查询结果
有向图却不能通过KosarajuCC来同样做到

##### 传递闭包 Transitive Clousure
有向图G的传递闭包指包含所有G的顶点，如果从G有v->w， 那么传递闭包中则存在v->w的边。
一个有向图可能是稀疏的，但是其传递闭包可能是紧凑的。 构造出传递闭包，其实就实现了有向图中两点连通的判断问题。

###### TransitiveClousure
算法很简单，就是对每个点分别执行DirectedDFS来预处理，判断时直接检查对应的值即可。
这个算法问题在于需要大量的空间，对V个顶点的图需要V*V的空间
因此对于巨型图，这个算法是不实际的。
需要指出，现在还没找到可以快速解决的这个问题的算法。

