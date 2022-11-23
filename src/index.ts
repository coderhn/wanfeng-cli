import init from './commands/init';
import figlet from 'figlet';
import { program } from 'commander';
const register = async () => {
  program
    // 配置版本号信息
    .version(`v${require("../package.json").version}`)
    .usage("<command> [option]");
  

  program
    .command("init [strategy]")
    .option('-spa, --react_standard [name]','创建一个标准的react单页应用')
    .option('-ssr, --react_ssr [name]','创建一个react服务端渲染应用')
    .option('-admin, --react_admin [name]','创建一个react管理后台应用')
    .option('-f, --force','忽略警告，覆盖创建')
    .description("快速创建一个web应用脚手架")
    .usage('[strategy] [options]')
    .action(init);

  program.on("--help", () => {
    // 使用 figlet 绘制公司 Logo
    console.log(
      "\r\n" +
      figlet.textSync("easyv-cli", {
        font: "4Max",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    );
  });
  // 解析用户执行命令传入参数
  program.parse(process.argv)
}
export default register;
