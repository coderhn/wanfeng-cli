import inquirer from "inquirer";
import chalk from "chalk";
import validate from "validate-npm-package-name"
// import { isDir } from "../utils";
import create from "./create";
import { dirProcess, isExistedDir } from "../utils";
export type OptionType = {
  react_standard: boolean | string;
  react_ssr: boolean | string;
  react_admin: boolean | string;
  force: boolean | string;
}
const init = async (strategy: string, options: OptionType) => {
  // console.log("options",options);
  if (Object.keys(options).length) {
    create(options);
    return;
  }

  let { type, name } = await inquirer.prompt([
    {
      name: "type",
      type: "list",
      message: "请选择项目类型:",
      choices: [
        {
          name: "spa-react (React单页应用)",
          value: "react_standard",
        },
        {
          name: "ssr-react (React服务端渲染应用)",
          value: 'react_ssr',
        },
        {
          name: "react-admin (React后台管理应用)",
          value: 'react_admin',
        },

      ],
    },
    {
      type: "input",
      name: "name",
      message: "请输入项目名称:",
      validate: async function (input) {
        // 检查当前目录是否存在相同的目录
        const isExisted = isExistedDir(input);
        const validateRes = validate(input);
        const isValidName = !Object.values(validateRes).some((d) => d === false);
        if (isValidName && !isExisted) return true;
        return isExisted
          ? `文件夹："${input}"已经存在 ("${input}" 文件夹已经存在)`
          : chalk.hex('#FFA500')("包名不符合npm规范 (请重新输入项目名称)");
      },
    }
  ]);

  if (!type) {
    return;
  }
  
  switch (type) {
    case 'react_standard':
      await create({ react_standard: name })
      break;
    case "react_ssr":
      await create({ react_ssr: name })
      break
    default:
      await create({ react_admin: name })
      break;
  }
}
export default init;
