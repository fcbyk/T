/****
 条件判断
 if：基础判断
 guard：用于提前返回（减少嵌套）
 switch：更强大的分支（支持范围、元组、条件）
 */

public func app1(
    age:Int = 18,
    point:(Int,Int) = (1, 1)
) {
    
    if age >= 18 {
        print("成年人")
    } else {
        print("未成年人")
    }
    
    /**
     Swift 特点：必须是 Bool
     if age ❌ 会报错
     guard（提前退出）
     */
    func checkAge(_ age: Int?) {
        // if写法
//        if age != nil {
//            print(age!)
//        } else {
//            print("age 为空")
//        }
        
        // guard 写法1
        // 条件不满足 → 进入 else 并退出；
        // 条件满足 → 继续往下执行
//        guard age != nil else {
//            print("age 为空")
//            return
//        }
//        print(age!)
        
        // guard 写法2
        // 在判断的同时进行“可选值解包”
        // 如果 age 为 nil → 进入 else 并退出；否则自动解包为非可选类型
        guard let age = age else {
            print("age 为空")
            return
        }
        print(age)
        
        /**
         guard age != nil
         - 只是做判断
         - 后面仍然是 Optional，需要 !
         
         guard let age = age
         - 判断 + 解包（推荐）
         - 后面直接是非 Optional，更安全
         */
        
    }
    checkAge(nil)
    checkAge(20)
    
    /**
     switch（Swift 很强）
     不需要 break
     必须覆盖所有情况（否则报错）
     */
    let score = 85
    switch score {
    case 0..<60:
        print("不及格")
    case 60..<90:
        print("及格")
    case 90...100:
        print("优秀")
    default:
        print("未知")
    }
    
    // switch + 模式匹配（进阶）
    switch point {
    case (0, 0):
        print("原点")
        
    case (let x, 0):
        print("在 x 轴上: \(x)")
        
    case (0, let y):
        print("在 y 轴上: \(y)")
        
    case (let x, let y) where x == y:
        print("在对角线上: \(x), \(y)")
        
    default:
        print("普通点")
    }
}

app1()
