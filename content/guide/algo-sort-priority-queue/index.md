+++
title = "优先队列"
description = ""
date = 2022-08-09T14:02:36+08:00
featured = false
comment = false
toc = false
reward = false
categories = [
  "算法"
]
tags = [
  "排序"
]
series = []
images = []
+++

> 本文内容来自 Algorithhms 4th Edition
Priority Queue之所以重要是因为有时候我们需要在获取部分数据时就进行排序后找到最大/最小的item。 此时我们不必要对这些元素完全排序，因为还可能继续的有元素添加进来。
在Prioirty Queue的基础上，又有了Heap sort。


### 基本实现。
通过array我们可以实现最简单的PQ
- Ordered： 当我们插入一个元素时，我们在array按顺序插入，当delMin（）时将第一个取出即可
- Unordered: 依次插入元素，当要取出时，遍历数组找到最小的元素取出

### Heap
Binary Heap能够有效的支持PQ操作。在Binary Heap中，key被存储在一个数组中，并且保证每个Key都大于或等于两个制定位置的KEY.
理解上，可以把Binary Heap想像成Binary Tree： 每个点的key都大于或等于其子节点的key.
由此，在BT上，向上走Key值总是更大的，向下走Key值总是更小的。
**在Heap ordered binary tree中最大值总在root上。**

##### Binary Heap定义
Binary Heap就是一组Key按照完全Heap Ordered Binary Tree的顺序来安排，按照层级在数组中表示（注意：数组的第一位不使用）
由此，很重要的点就是对于每个节点其位置为k, 则其两个子节点的位置为2K, 2K+1; 其父节点的位置为 k/2

一个完全的二分树的高度为lgN

### 重要的操作
#### Swim
如果一个节点的值比父节点的值大，违反了我们对Binary Head的要求，因此我们要将该节点上移，如同Swim. swim的方式很简单，不断检查该节点(k)与其父节点(k /2 )，如果比父节点大则交换两个节点，直到根节点为止。
#### Sink
相反，如果一个节点比子节点小，我们就要将该节点下沉。Sink的方式：
1. 找到其两个子节点2k, 2k+1,并确定两个子节点中较大的那个节点的位置
2. 将该节点与大的子节点交换。
3. 循环直到比子节点大或者没有其他子节点。

```java
private void swim(int k) {
  while (k > 1 && less(k, k / 2)) {
    exch(k/2, k);
    k = k / 2;
  }
}

private void sink(int k) {
  while(2*k <= N) {
    int j = 2 * k;
    if (j < N && less(j, j+1)) {
      j++;
    }
    exch(k, j);
    k = j;
  }
}
```

### Heap Sort
Heap Sort的思路就是利用上面的PQ, 如果我们构造好PQ，每次将root取出来放入到队列末尾即可。
更准确的说，如果我们已经构造好了PQ, 每次我们将root根该PQ的最后一个节点交换，并将PQ的长度缩小一位。此时我们对放到root的节点重新做sink操作，如此循环。

问题的关键变为如何第一步构造这个PQ。
最简单的办法是按照顺序从左到右一个个的进行swim操作。当遍历到最后一个元素时PQ构造完成。
但是还有更好的办法，是从右向左一个一个进行sink操作。 假设有N个元素，那么N/2 ~N区间的元素是Leaf，所以他们不需要进行sink, 我们可以从N/2开始向1遍历。

