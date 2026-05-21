/**
 * 循环控制
 * break：跳出循环
 * continue：跳过本次循环，继续下一次
 */

// break
var i = 0
while(true){
    if(i==5) break
    print(i)
    print(" ")
    i++
}

println()


// continue
for (x in 1..10) {
    if (x == 5) continue
    print(x)
    print(" ")
}