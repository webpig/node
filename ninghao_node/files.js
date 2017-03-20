const fs = require('fs');

fs.stat('index.js', (error, stats) => {
  // 发生错误时怎么办
  if (error) {
    // 文件不存在，文件异常，路径错误，死机，IO忙
    console.log(error);
  } else {
    console.log(stats);
    console.log(`文件：${stats.isFile()?'是':'否'}`);
    console.log(`文件夹：${stats.isDirectory()?'是':'否'}`);
  }
});

fs.mkdir('logs', (error) => {
  if (error) {
    console.log(JSON.stringify(error));
  } else {
    console.log('成功创建目录：logs');
  }
});
