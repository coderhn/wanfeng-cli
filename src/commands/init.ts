import inquirer from "inquirer";
const init = async(model:"spa"|"ssr"|"admin")=>{
  console.log("model",model);
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
        }
      ],
    },
    {
        type: "input",
        name: "name",
        message: "请输入项目名称:",
        // validate: async function (input){
        //   // 检查当前目录是否存在相同的目录
        //   const isExisted = await isDir(input);
        //   const validateRes = validate(input);
        //   const isValidName = !Object.values(validateRes).some((d)=>d === false);
        //   if (isValidName && !isExisted) return true;

        //   return isExisted
        //   ? `文件夹："${input}"已经存在 ("${input}" 文件夹已经存在)`
        //   : chalk.hex('#FFA500')("包名不符合npm规范 (请重新输入项目名称)");
        // },
    }
  ]);

  if(!type){
    return;
  }
  switch (type) {
    case 'spa-react':
        console.log('选择了',type);
        break;
    
    default:
        console.log('选择了',type);
        break;
  }
}
export default init;
