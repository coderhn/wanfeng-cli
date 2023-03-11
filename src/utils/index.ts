import path from 'path';
import inquirer from "inquirer";
import fs from 'fs-extra';
import ora from "ora";

export function isExistedDir(dirName:string){
     // 执行创建命令
    // 当前命令行选择的目录
    const cwd = process.cwd();
    // 需要创建的目录地址
    const targetAir = path.join(cwd, dirName);
    return fs.existsSync(targetAir);
}

export async function dirProcess(dirName: string, force?: boolean | string) {
    const targetAir = path.join(process.cwd(), dirName);
    if (isExistedDir(dirName)) {
        if (force) {
            await fs.remove(targetAir);
        } else {
            // 询问用户是否确定要覆盖
            let { action } = await inquirer.prompt([
                {
                    name: "action",
                    type: "list",
                    message: "目标目录已经存在，请选取操作:",
                    choices: [
                        {
                            name: "覆盖",
                            value: "overwrite",
                        },
                        {
                            name: "取消",
                            value: false,
                        },
                    ],
                },
            ]);
            if (!action) return false;
            const spinner = ora("正在删除相同文件夹...");
            spinner.start();
            await fs.remove(targetAir);
            spinner.succeed('删除成功');
        }
    }
}
