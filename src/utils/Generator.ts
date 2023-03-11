import ora from "ora";
import downloadGitRepo from "download-git-repo";
import path from "path";
import { OptionType } from "../commands/init";
import chalk from "chalk";

const url = {
  react_standard: "direct:https://github.com/suren-atoyan/react-pwa.git",
  react_admin: "direct:https://github.com/ant-design/ant-design-pro.git",
  react_ssr: "direct:https://github.com/EverSeenTOTOTO/browser-app-boilerplate.git",
};

class Generator {
  name: string;
  type: Exclude<keyof OptionType, "force">;
  constructor(type: Exclude<keyof OptionType, "force">, name: string) {
    this.name = name;
    this.type = type;
  }

  async download() {
    return await new Promise((resolve, reject) => {
      const spinner = ora("正在下载模板...");
      spinner.start();
      downloadGitRepo(
        url[this.type],
        path.resolve(process.cwd(), this.name),
        { clone: true },
        (error: Error) => {
          if (error) {
            spinner.fail(`模板下载出错:${error.message}`);
            reject(error);
            return;
          }
          spinner.succeed("下载完成");
          console.log();
          console.log(`成功创建应用:${chalk.blueBright(this.name)}`);
          console.log(`${chalk.blueBright("cd")} ${this.name}`);
          console.log(chalk.blueBright(`npm run dev`));
          resolve(true);
        }
      );
    });
  }
}

export default Generator;
