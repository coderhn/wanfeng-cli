const inquirer = require("inquirer");
const create = require("./create");
var validate = require("validate-npm-package-name")
const { promisify } = require("util");
const fs = require('fs');
const path = require('path');
const {logWarn} = require('../utils/logger');
const chalk = require("chalk");

const stat = promisify(fs.stat);

async function isDir(dirName) {
  const dirPath = path.resolve(process.cwd(), dirName);
  if (fs.existsSync(dirPath)) {
    try {
      const stats = await stat(dirPath);
      if (stats.isDirectory()) {
        return true;
      }
      // eslint-disable-next-line no-empty
    } catch (e) { }
  }
  return false;
}

module.exports = async function(){
    let { type,name } = await inquirer.prompt([
        {
          name: "type",
          type: "list",
          message: "请选择项目类型:",
          choices: [
            {
              name: "spa-react (React单页应用)",
              value: "spa-react",
            },
            {
              name: "ssr-react (React服务端渲染应用)",
              value: 'ssr-react',
            },
            {
              name: "easyv-component (easyV组件)",
              value: 'easyv-component',
            },
            {
              name: "react-component (react组件库)",
              value: 'react-component',
            },
          ],
        },
        {
            type: "input",
            name: "name",
            message: "请输入项目名称:",
            validate: async function (input){
              // 检查当前目录是否存在相同的目录
              const isExisted = await isDir(input);
              const validateRes = validate(input);
              const isValidName = !Object.values(validateRes).some((d)=>d === false);
              if (isValidName && !isExisted) return true;

              return isExisted
              ? `文件夹："${input}"已经存在 ("${input}" 文件夹已经存在)`
              : chalk.hex('#FFA500')("包名不符合npm规范 (请重新输入项目名称)");
            },
        }
      ]);

      if(!type){
        return;
      }
      switch (type) {
        case 'spa-react':
            create(name);
            break;
        
        default:
            create(name,{},'direct:http://gitlab.prod.dtstack.cn/visdev/easyv-cli.git');
            break;
      }
}
