+++
title = "Algo String String Sorts"
description = ""
date = 2022-08-11T10:28:47+08:00
featured = false
comment = false
toc = false
reward = false
categories = [
  "算法"
]
tags = [
  "字符串排序"
]
series = []
images = []
+++

> 本文内容来自 Algorithhms 4th Edition

### Alphabet
字符串的排序跟传统排序一个重要的区别就是我们可以提前知道字符串的字符集。许多算法都是基于字符集的概念上来的。
```java
interface Alphabet {
  // Alphabet(String s);
  char toChar(int index);
  int toIndex(char c);
  boolean contains(char c);
  int R(); //字符集的字符数
  int lgR(); //所需占用的空间(bits)
  int[] toIndices(String s);
  String toChars(int[] indices);
}
```
例如，传统一个char我们需要用16个bit来表示，但是如果我么知道当前的字符是“0-9”，那么完全可以用4个bit来表达每个字符。
从这个意义上来说，Alphabet压缩了字符范围。
比较传统意义上的排序，我们只能基于compareTo来区分其大小。

### Key-indexed Counting
当Key的数量很小时，对Key索引后计数的方式排序是高效的，并且这种排序是其他排序的基础。
一个常用的场景就是老师对所有的学生按照班级排序。由于班级数是很小的，所以适用于Key-indexed counting.
算法步骤：
1. 对于每个key统计其出现的次数，例如统计每个班有多少个学生。 我们用数组int[] count来保存统计信息，注意：如果key的值是r,保存为count[r + 1].(也就是说我们将count[0]留空)
2. 将计数转化为索引位置。按照顺序，第一个key的起始位置是0，第二个key的起始位置是count[第一个key], 第三个key的起始位置是 第二个key的起始位置 + count[第二个key]， 依次类推
由上面看出，我们将key保存时都在count中后移了一位(count[r + 1]), 所以实际上第i个key的起始位置为loc[i-1] + count[i];
如果我们不使用额外的数组int[] loc来保存起始位置，而是直接在count上计算，那么这种转化就是
```java
for (int i = 0 ; i < R; i++) {
  count[i + 1] += count[i]; 
}
```
3. 分配数据。最后我们创建一个辅助的数组T[] aux. 对原始的待排序数组一个个的取出来，根据其key值找到对应的索引位置方式aux中，并将count[r]的值+1
```java
for (int i =0; i < N; i++) {
  aux[count[a[i].key()]++] = a[i];
}
```
4. 将结果从aux复制回a


**Key-indexed counting算法使用8N+3R+1的数组访问。并且该算法时稳定（Stable）的**
注意：在sort算法中，到目前为止，只有Insert sort和merge sort是稳定的。 所谓稳定是指对于相同的key, 排序后是否保留的其原来的前后关系。

从分析上来看，Key-indexed counting打破了排序算法的NlogN的下限。为什么可以做到，这就是因为传统算法中我们只能通过compareTo来比较两个元素来排序，而key-index counting则完全不需要进行比较，当
R是个常量时，我们就等于做到了线性时间排序。

在字符串排序中，Alphabet的R至关重要

### LSD (Least-significant-digit)
LSD是从右至左的顺序来检查字符串并排序。 这个方法针对的是需要排序的字符串长度相同。例如统计高速路上一段时间内有多少辆车，方法就是将这段时间内的车牌排序后去掉重复的。类似的还有电话号码，银行账号，ip地址等。
利用Key-indexed counting算法，假设字符串长度是w, 我们从最后一个字符开始每次执行key-indexed counting排序，执行w后即完成排序
LSD稳定的对固定长度的字符串排序。

### MSD (Most-significant-digit)
MSD则是按照从左至右的顺序来检查。
MSD之所以吸引人是因为其可以不需要检查所以的字符就完成排序。这个算法与Quick Sort比较类似，因为他们都是将元素分段然后递归的完成排序。区别在与MSD使用第一个字符来完成分段，而qs则可能需要对所有的元素进行比较来完成分段。
MSD有两个方法， 一种是对每个字符进行逐步分段， 另一种则是对字符分成三段，小于，等于，大于基准字符

MSD即是对LSD的扩充，使之不仅局限于固定长度的字符串。 MSD的核心就是从左至右，对第一个字符进行key-indexed counting排序，然后对每个key,分别做递归的对每个subarrays排序。
对于MSD我们要特别注意当到达**字符串结束**的时候。 假设对第d位进行排序，此时一个字符串已经结束，我们当然希望这些已经结束的字符串保留相对位置，并且在后续的sub排序中排除掉。
1. 在charAt(String s, int d)中如果d >= s.length()则代表该字符串已经中止，我们返回-1，否则我们返回s.charAt(d)。 
2. 改造count. 由于返回的索引是-1...R-1, 我们对其+1后变成0...R, 长度为R+1. 其中0代表当前已经中止的字符，1代表Alphabet中第一个字符。 由于我们还需要一个位置来表示最开头的位置为0，所以实际上count的长度为R+2. 每个字符对应的索引为charAt(d) + 2. count[0]固定为0，count[1]代表已经中止的字符的数量，count[2]代表第一个字符的数量。。。。count[R+1]代表第R个字符的数量
3. 对count进行坐标转换，count[0]代表起始位置（固定为0），count[1]代表第一个字符的开始位置..., count[R]代表第R个字符开始的位置，count[R+1]不使用
4. 按照count对数组进行分散处理。此时索引是count[charAt(a[i], d) + 1]
5. 由于我们在上面分发是都是对count进行自增处理，所以分发完成后相当于count[0] = 原来的count[1]. 也就是说count[0]代表第一个字符的开始位置。以此类推。所以接下来对sub进行递归时，我们直接从0开始遍历count,分别找到sub的上下标
```java
public class MSD {
  private static int R = 256;
  private static final int M = 15;
  private static String[] aux;
  private static int charAt(String s, int d) {
    if (d < s.length()) {
      return s.charAt(d);
    }
    return -1;
  }

  public static void sort(String[] a) {
    sort(a, 0, a.length - 1, 0);
  }

  private static void sort(String[]a ,int lo, int hi, int d) {
    //如果sub很小，选用插入排序YYDS
    if (hi < lo + M) {
      Insertion.sort(a, lo, hi, d);
      return;
    }

    int[] count = new int[R + 2];
    //统计数量
    for (int i = lo; i <= hi; i++) {
      count[charAt(a[i], d) + 2]++;
    }
    //变换
    for (int r = 0; r < R + 1; r++) {
      count[r+1] += count[r];
    }

    for (int i = lo; i < hi; i++) {
      aux[count[charAt(a[i], d) + 1]] = a[i];
      count[charAt(a[i], d) + 1]++;
    }

    for (int i = lo; i < hi; i++) {
      a[i] = aux[i - lo]; //aux是从0开始保存的
    }

    for (int r = 0; r < R; r ++) {
      sort(a, lo + count[r], lo + count[r + 1] - 1, d+1);
    }

  }
}

//insertion sort
public class Insertion {
  public static void sort(String[]a, int lo, int hi, int d) {
    for (int i = lo; i <=hi; i++) {
      for (int j = i; j > lo && less(a[j], a[j - 1], d); j--) {
        exch(a, j, j -1);
      }
    }
  }
  private static boolean less(String v, String w, int d) {
    return v.subString(d).compareTo(w.subString(d)) < 0;
  }
}
```

##### Small Subarrays
MSD之所以高效，在于对于大多数应用来说，我们只需要检查头几个字符就可以将其排序。另一方面，MSD快速将数组分割成多个sub来排序，但是这也是个双刃剑：我们会面临海量的sub. 因此sub的排序对于MSD是关键。
其他的递归排序，比如Quick Sort, Merge Sort也会有sub的问题，但是为什么MSD这个问题会更严峻呢？观察上面的算法，假设我们的R是256， 我们要对上百万的ASCII的字符串排序，同时这些字符串不会出现中间短一截的情况，那么最终我们会面临百万个长度为1的sub. 关键是，在MSD中我们是利用258长度的count来将其转化成索引的，而这个操作将为成为最耗时的部分。
所以对于MSD来说，
- 如果sub的长度比较小（<15)我们必须用Insert sort来处理，从而避免这个问题。
- 谨慎选择R的范围，如果从R.ASCII切换到R.UNICODE，那处理的速度会同样指数上升
##### Equal Keys
MSD的另一个缺陷就是对包含大量相同key的sub处理比较慢。如果这些字符串有大量的相同的字符，那么意味着我们在处理这些相同字符时无法对字符串进行再分割。同时key-indexed counting对于处理key相同也很慢，因为我们需要每次都初始化count，统计其个数然后转化为索引后才分配和拷贝回来，结果这些等于做了个寂寞。同样的，不仅如果大量字符串相同效率慢，大量前缀相同的字符串排序也会有这个问题。
##### Extra space
MSD需要一个aux长度为N, 不过这个不是特别关键， 重要的是需要一个count而这个count必须在每次递归中创建。

### Three-way quick sort
思路是将MSD和Quick Sort相结合。假设对i'th字符进行比较，将字符串分成小于，等于，大于的三组。只对等于的字符进行下一个字符的递归比较，而另外两组则重复当前位置i的处理。相较于MSD,MSD每次都会分割成大量的sub, 3-way qs只会分割成三个sub,所以其对于有大量相同前缀的字符串效率更高。
```java
public class Quick3string {
  private static int charAt(String s, int d) {
    if (d < s.length()) {
      return s.charAt(d);
    }
    return -1;
  }

  public static void sort(String[] a) {
    sort(a, 0, a.length - 1, 0);
  }

  private static void sort(String[] a, int lo, int hi, int d) {
    if (hi <= lo) return;
    int lt = lo, gt = hi;
    int v = charAt(a[lo], d);
    int i = lo + 1;
    while (i <= gt) {
      int t = charAt(a[i], d);
      if (t < v) exch(a, lt++, i++);
      else if (t > v) exch(a, gt--, i);
      else i++;
    }

    sort(a, lo, lt - 1, d);
    if (v >= 0) sort(a, lt, gt, d+1);
    sort(a, gt + 1, hi, d);
  }
}
```