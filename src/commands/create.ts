import { OptionType } from "./init";
import { dirProcess } from "../utils";
import Generator from "../utils/Generator";

/**
 *
 * @param name 应用名称
 * @param options 可选参数
 * @param url 指定模板下载路径
 */
const create = async (options: OptionType) => {
    const { react_standard, react_ssr, react_admin, force } = options;
    if (react_standard) {
        let name = typeof react_standard === "boolean" ? "demo":react_standard;
        await dirProcess(
            name,
            force
        );
        const generator = new Generator('react_standard',name);
        await generator.download();
        return;
    }
    if (react_ssr) {
        let name = typeof react_ssr === "boolean" ? "demo":react_ssr;
        await dirProcess(
            name,
            force
        );
        const generator = new Generator('react_ssr',name);
        await generator.download();
        return;
    }
    let name = typeof react_admin === "boolean" ? "demo":react_admin;
    await dirProcess(
        name,
        force
    );
    const generator = new Generator('react_admin',name);
    await generator.download();
};

export default create;
