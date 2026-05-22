/****
 跳转语句
 return 常和 guard 一起使用（提前返回）
 break（不仅用于循环），可以用于 switch， 表示结束当前结构（循环 / switch）
 continue 跳过当前循环的本次迭代，进入下一次
 标签语句（label ⭐️），可以控制多层循环的跳转（类似 JS）
 fallthrough（switch 专用），默认 Swift 的 switch 不会贯穿，使用 fallthrough 可以强制进入下一个 case
 */

public func app3(){
    // break / continue
    for i in 1...5 {
        if i == 3 {
            continue   // 跳过 3
        }
        if i == 5 {
            break      // 提前结束
        }
        print(i)
    }

    // label（多层循环跳转）
    outerLoop: for i in 1...3 {
        for j in 1...3 {
            if j == 2 {
                break outerLoop
            }
            print("i=\(i), j=\(j)")
        }
    }

    // fallthrough（switch 特性）
    let num = 1
    switch num {
    case 1:
        print("1")
        fallthrough
    case 2:
        print("2")
    default:
        break
    }
}

app3()
