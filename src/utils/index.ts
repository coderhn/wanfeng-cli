import path from 'path';
import inquirer from "inquirer";
import fs from 'fs-extra';
import ora from "ora";
import downloadGitRepo from 'download-git-repo';
import { OptionType } from '../commands/init';
export async function dirProcess(dirName: string, force?: boolean | string) {
    // 执行创建命令
    // 当前命令行选择的目录
    const cwd = process.cwd();
    // 需要创建的目录地址
    const targetAir = path.join(cwd, dirName);
    if (fs.existsSync(targetAir)) {
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

// export async function donwloadTemplate(type: Exclude<keyof OptionType, 'force'>, dirName: string) {
//     const spinner = ora("正在下载模板...");
//     spinner.start();
//     await downloadGitRepo('direct:http://gitlab.prod.dtstack.cn/visdev/easyvadmin-monorepo.git', path.resolve(process.cwd(), dirName),{clone:true},(error:Error)=>{
//         if(error){
//             spinner.fail(`模板下载出错:${error.message}`);
//             return;
//         }
//         spinner.succeed('下载完成');
//     });  
// }