/****
 循环：for-in / while / repeat-while
 */

public func app2(){
    
    // for-in 基本用法
    let nums = [1, 2, 3, 4, 5]
    for n in nums {
        print(n)
    }

    // for-in 遍历区间
    for i in 1...5 {   // 闭区间 [1,5]
        print(i)
    }
    for i in 1..<5 {   // 半开区间 [1,5)
        print(i)
    }

    // 忽略变量（类似 JS 的 for(;;)）
    for _ in 0..<3 {
        print("hello")
    }

    // while 循环
    var count = 3
    while count > 0 {
        print(count)
        count -= 1
    }

    // repeat-while（至少执行一次）
    let num = 0
    repeat {
        print("执行一次，即使条件不满足")
    } while num > 0
}

app2()