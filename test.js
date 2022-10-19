const download = require('download-git-repo');
download("direct:http://gitlab.prod.dtstack.cn/visdev/easyv-cli.git",'master',{clone:true},function (err) {
    console.log(err ? 'Error' : 'Success');
    console.log(err);
})  
