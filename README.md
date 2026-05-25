# demo105 flex布局

## Flex 的核心思想

### 两个角色

1. 容器（flex container）
2. 元素（flex item）

### 两个轴

1. 主轴（main axis）
2. 交叉轴（cross axis）

* 主轴默认为横向 →
* 交叉轴始终垂直于主轴：纵向 ↓

## 容器属性

1. **`display: flex`**
   开启 flex

2. **`flex-direction`**
   控制主轴方向

3. **`justify-content`**
   控制主轴对齐方式

4. **`align-items`**
   控制 item 在交叉轴上的对齐方式
   > 单行时，看起来像控制整行的垂直对齐

5. **`flex-wrap`**
   子元素宽度超出父盒子时，是否换行

6. **`align-content`**
   控制多行（line）在交叉轴上的分布方式
   > 只有多行（wrap）时才生效

7. **`flex-flow`**
   主轴方向 + 换行 合并写法

## Item 属性

1. **`flex-grow`**
   放大比例，分配剩余空间

2. **`flex-shrink`**
   缩小比例，空间不足时压缩

3. **`flex-basis`**
   item 在主轴方向上的初始大小

4. **`flex`**
   grow + shrink + basis 简写

5. **`align-self`**
   单独控制某个 item 的交叉轴对齐

6. **`order`**
   控制 item 排列顺序