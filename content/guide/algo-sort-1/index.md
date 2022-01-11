+++
title = "排序-基本排序"
description = ""
date = 2022-01-10T11:26:12+08:00
featured = false
comment = false
toc = false
reward = false
categories = [
  "算法"
]
tags = [
  "sorting"
]
series = []
images = []
+++

> 本文内容来自 Algorithhms 4th Edition

### 前言
排序就是将对象开让一定的顺序排列。据统计，大约有30%的运算都是排序。
有三个理由让我们需要研究排序：
- 研究排序算法是我们研究其他算法效率的基础
- 在研究过程中使用的技巧对于其他问题也是有效的
- 我们经常以排序作为解决其他问题的第一步

更重要的是排序算法本身是**优雅，经典和高效**的

### 着手点
- 我们首先要定义什么是排序
- 验证。 我们需要验证我们算法的正确性。 即使我们已经测试过，我们也应该为每个算法提供一个检验函数`isSorted()`
- 执行时间。 我们首先由一些不同的排序算法得到每个算法的基本操作数量（例如比较，交换，对数组的读写等），然后由这些数据作为基础提出一个算法效率的假设，并且提供一个可以用来验证这个假设正确与否的工具，
- 内存使用。算法的内存使用情况和执行时间同样重要。排序算法通常可以分为两类：一种直接排序，基本不使用或者只只用少量的栈； 另一种需要使用额外的内存来保存排好序的结果
- 数据类型：我们的排序代码对于任何实现了`Comparable<T>`的对象都是有效的


### 选择排序
这个排序很简单： 首先，找到最小的对象将其放在第一位，然后依次找到最小的放在第二，第三位，直到这个数组排好序。这个算法叫选择排序是因为它通过不断在剩余的对象中寻找最小的元素。

**Proposition A: 算法使用~N<sup>2</sup>/2次比较和N次交换**

算法的特点：
- 执行时间对于输入的数据不敏感。在一次循环中查找最小元素对于下次循环没有什么帮助，因此即使是一个排好序的数组仍要花费相同的时间进行排序。这是个极大的劣势
- 数据的移动很少，最多交换N次，相对于数组长度是线性的。其他算法都大大多于这个数量

### 插入排序
插入排序类似于我们对扑克牌的排序，每次将一张牌插入已经排好序的牌的对应的位置之中。具体实现中，我们需要通过将所有大的元素向右移动一个位置来为当前的元素空出位置。
在插入排序里，当前位置左边的元素都是已经排好序的，但是他们的位置不一定是最终的位置，因为继续排序的过程中可能会为更小的元素腾位置。但是当到达最后的位置时，整个数组是排好序的。
与选择排序不同，插入排序的执行时间跟数组最初的顺序有关。如果数组本身已经排好序，那么其执行会很快

**Proposition B: 执行时间： ～N<sup>2</sup>/4次比较和～N<sup>2</sup>/4次交换，最坏的情况下～N<sup>2</sup>/2次比较和～N<sup>2</sup>/2次交换**

> 想象一下，最坏的情况，就是一个选择排序，因为每次都要将该元素放到最左边， 平均下来，如果是比较一半，那么就是～N<sup>2</sup>/4
- 对于已经排好序的数组，插入排序很适合

更普遍的，我们考虑部分排序的数组：假设我们定义一个颠倒是指数组中一对元素顺序错误，例如E X A M P L E有11对颠倒：E-A, X-A, X-M, X-P, X-L, X-E, M-L, M-E, P-L, P-E, and L-E。如果数组中这样的颠倒的个数少于数组长度的常量配属，我们就说这个数组是部分排序的。
常见的部分排序的数组的例子：
- 一个数组中，每个元素离正确的位置都不太远
- 一个小的数组在一个大的已经排好序的数组之后
- 一个数组中只有几个元素位置不正确

插入排序对于上述部分排序的数组是高效的，而选择排序则不。事实上，对于已经部分排序的数组，插入排序比其他排序算法更高效。

**Proposition C: 插入排序中交换的次数等于颠倒的数量，比较的次数最少是颠倒的数量，最多是颠倒的数量加上数组的长度减去1**.

总结：插入排序对于部分排序数组和小数组是极好的算法，不仅仅是因为这两类数组经常碰到，还因为对于许多高级算法，这两类数组通常会作为中间结果出现。

### 比较两种排序算法
要比较算法，我们需要遵从下面的步骤
- 实现算法
- 分析每个算法的基本属性（Proposition A, B, C）
- 形成算法性能比较的推论 (Proposition D)
- 执行测试数据来验证这个推论 (SortCompare)

具体来说：
#### 实现算法： 略
#### 为输入对象建立合适的model. 对于排序，我们假设数组是随机的，并且key是不重复的。 因此对于key会重复的应用需要慎重对待
#### 推论

**Property D: 选择排序和插入排序对于随机的，key不同的数组的执行时间是数组长度的平方和一个小的，常数因子的积**
#### 验证：我们实现一个SortCompare类，这个类很简单，就是输入生成随机数组的长度(N)和重复次数(T)，计算不同算法的话费时间总和进而比较
``` java
public class SortCompare {

  public static double time(String alg, Double[] a) { /* See text. */ }

  public static double timeRandomInput(String alg, int N, int T) { // Use alg to sort T random arrays of length N.
    double total = 0.0;
    Double[] a = new Double[N];
    for (int t = 0; t < T; t++) {
      // Perform one experiment (generate and sort an array).
      for (int i = 0; i < N; i++)
        a[i] = StdRandom.uniform(); 
      total += time(alg, a);

    } 
    return total;
  }

  public static void main(String[] args) {
    String alg1 = args[0];
    String alg2 = args[1];
    int N = Integer.parseInt(args[2]);
    int T = Integer.parseInt(args[3]);
    double t1 = timeRandomInput(alg1, N, T); // total for alg1 
    double t2 = timeRandomInput(alg2, N, T); // total for alg2 
    StdOut.printf("For %d random Doubles\n %s is", N, alg1); 
    StdOut.printf(" %.1f times faster than %s\n", t2/t1, alg2);
  }
}
```

### 贝壳排序（ShellSort）
插入排序对于大的，无序的数组排序之所以慢是因为每次只能对相邻的元素进行交换，一次只能移动一位。例如如果最小的元素排在最后，则需要移动n-1次。贝壳排序是对插入排序的扩展。通过允许对间隔较远的元素进行交换，形成多个部分排序的数组，最后用插入排序进行有效的处理
其思想是将数组间隔h长度分成多个子数组，对每个子数组进行排序。例如以间隔4为单位，那么0，4，8。。。为一组，1，5，9....为另一组。这个方式的优点在于我们可以将交换的间隔从插入排序的1位变成了h位。同时每个子数组的长度表小了，当h足够大时，就变成了对小数组的排序--插入排序对于小数组是有效率的。 然后我们逐渐减小h的值，在这个过程中我们是不断的对部分排序的数组进行排序，因此也能保证效率。当h=1时即完成了排序。
``` java
public void sort(T[] a) {
        int n = a.length;
        int h = 1;
        while (h < n / 3) h = 3 * h + 1; 
        while (h >= 1) {
            for (int i = h; i < n; i++) {
                for (int j = i; j >= h && less(a[j], a[j-h]); j -= h) {
                    exch(a, j, j-h);
                }
            }
            h = h / 3;
        }
    }
```

这里有几个值得注意的点：
1. 代码中按照3倍进行分割，也就是说1， 4， 13， 40... 假设长度为16的数组，第一次h=13, 实际上就是对数组的首尾进行了排序。13<->0, 14<->1,15<->2。 第二次循环，h=4,于是从index=4开始到末尾，间隔4个排序。依次类推
1. 假设按照4倍分割，则为1，5，21，。。。，对于大数组，比如10000个，跟3区别不大，甚至按照5倍分割区别不大，（执行时间接近）,以下是按照不同倍数分割的执行时间

```
shell----split = 2, to 1000000 random array, spent 816 millis 
shell----split = 3, to 1000000 random array, spent 712 millis 
shell----split = 4, to 1000000 random array, spent 738 millis 
shell----split = 5, to 1000000 random array, spent 704 millis 
shell----split = 6, to 1000000 random array, spent 718 millis 
shell----split = 7, to 1000000 random array, spent 768 millis 
shell----split = 8, to 1000000 random array, spent 784 millis 
shell----split = 9, to 1000000 random array, spent 841 millis 
shell----split = 10, to 1000000 random array, spent 827 millis 
shell----split = 11, to 1000000 random array, spent 825 millis 
shell----split = 12, to 1000000 random array, spent 884 millis 
shell----split = 13, to 1000000 random array, spent 902 millis 
shell----split = 14, to 1000000 random array, spent 922 millis 
shell----split = 15, to 1000000 random array, spent 951 millis 
shell----split = 16, to 1000000 random array, spent 1021 millis 
shell----split = 17, to 1000000 random array, spent 1022 millis 
shell----split = 18, to 1000000 random array, spent 1116 millis 
shell----split = 19, to 1000000 random array, spent 1145 millis 
```
从上面可以看出，当split比较小时，我们最开始循环的子数组数量比较少，速度比较快。  想想对于16长度，3倍分割，第一次从13开始，子数组长度是2， 如果是4倍分割，则从5开始，那么排在10以后的需要排3个， 由此可见， 小数组和部分排序的数组是影响插入排序效率的关键
1. 贝壳排序的核心就是对于h,用插入排序来独立的处理每个h 序列。注意每次h是开头，所以要求j> h

如何决定分割量的大小？不同的值倍研究过，但还没有找到最佳的值，因此按例子中3倍来是可行的

#### 执行时间
**贝壳排序的实行时间不在是N<sup>2</sup>的倍数。 例如上面算法最坏情况下是N<sup>3/2</sup>**
简单的修改算法就可以打破N<sup>2</sup>的限制，这就是算法研究的有趣之处

**Property E : 如果以1，4，13，40，121，364。。。为增量，贝壳算法的比较次数不超过增量的N倍的一小部分**

#### 总结
贝壳算法代码简单，代码量少。对于中大型数组效率比较高，同时不额外使用内存
