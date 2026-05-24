//label 标签
//标签(label) 为程序定义位置，可以使用continue/break跳到该位置
flag1:while(true){
    console.log("label 标签")
    flag2:while (true) {
        break flag1;
    }
}
