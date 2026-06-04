// === 文件读写进阶 ===
//
// read_to_string / write 是最常用的。这里补两个进阶场景：
//   BufReader::lines() — 逐行读，适合大文件或流式处理
//   Write trait — 往任意"可写目标"里写（文件、内存、stdout 统一接口）

use std::fs;
use std::io::{self, BufRead, BufReader, Write};

// 逐行读取文件，统计行数，打印前 3 行
pub fn read_lines() {
    let file = fs::File::open("run.byk.json").expect("打开文件失败");
    let reader = BufReader::new(file);

    let mut line_count = 0;
    for line in reader.lines() {
        let line = line.expect("读行失败");
        line_count += 1;
        if line_count <= 3 {
            println!("  第{line_count}行: {line}");
        }
    }
    println!("  共 {line_count} 行");
}

// Write trait：同一个函数可以往文件、Vec、stdout 写
pub fn write_demo() -> io::Result<()> {
    // 1. 往 Vec<u8>（内存）写 —— 测试/拼凑数据时常用
    let mut buf: Vec<u8> = Vec::new();
    writeln!(buf, "第一行")?;
    writeln!(buf, "第二行")?;
    println!("  内存写入: {} bytes", buf.len());

    // 2. 往文件写
    let mut file = fs::File::create("target/output.txt")?;
    file.write_all(&buf)?;
    println!("  已写入 target/output.txt");

    // 3. 同一段数据直接写 stdout
    write!(io::stdout(), "  直接写 stdout\n")?;

    Ok(())
}
