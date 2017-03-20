const fs = require('fs');

fs.writeFile('logs/hello.log', 'hello ~ \n', error => {
  if (error) {
    console.log(error);
  } else {
    console.log('成功写入文件');
  }
});
