mod hello;
mod config;
mod io_demo;

fn main() {
    hello::run();
    println!("--- 实际业务 ---");
    config::add_alias();
    println!("\n--- 文件读写进阶 ---");
    io_demo::read_lines();
    io_demo::write_demo().unwrap();
}
