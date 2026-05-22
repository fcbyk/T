/****
 条件增强 where
 */
public func app4(point:(Int,Int) = (2, 2)) {

    // 只遍历偶数
    for i in 1...10 where i % 2 == 0 {
        print(i)
    }

    // where 可以跟在 if let 后面继续加条件
    // 新写法使用，代替where
    let age: Int? = 20
    if let age = age, age >= 18 {
        print("成年人: \(age)")
    } else {
        print("未成年或为空")
    }

    switch point {
    case let (x, y) where x == y:
        print("在对角线上")
    case let (x, y) where x > y:
        print("x > y")
    default:
        print("其他情况")
    }

    // 集合过滤（对比 if）
    let nums = [1, 2, 3, 4, 5, 6]

    // 写法1：where（推荐）
    for n in nums where n > 3 {
        print("where:", n)
    }

    // 写法2：if
    for n in nums {
        if n > 3 {
            print("if:", n)
        }
    }
}

app4()
