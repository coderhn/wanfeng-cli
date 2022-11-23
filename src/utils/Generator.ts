import ora from "ora";
import downloadGitRepo from 'download-git-repo';
import path from 'path';
import { OptionType } from "../commands/init";

class Generator{
    name:string;
    type:Exclude<keyof OptionType, 'force'>;
    constructor(type:Exclude<keyof OptionType, 'force'>,name:string){
        this.name = name;
        this.type = type;
    }

   async download(){
    return await new Promise((resolve,reject)=>{
        const spinner = ora("正在下载模板...");
        spinner.start();
        downloadGitRepo('direct:http://gitlab.prod.dtstack.cn/visdev/easyvadmin-monorepo.git', path.resolve(process.cwd(), this.name),{clone:true},(error:Error)=>{
            if(error){
                spinner.fail(`模板下载出错:${error.message}`);
                reject(error);
                return;
            }
            spinner.succeed('下载完成');
            resolve(true);
        })
    })
   }
}

export default Generator;