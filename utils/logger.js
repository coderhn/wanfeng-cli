const chalk = require('chalk');
module.exports = {
    logWarn:(str)=>console.warn(chalk.hex('#FFA500')(str)),
}