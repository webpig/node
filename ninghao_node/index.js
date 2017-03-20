// require 模块引入
const fs = require('fs');
const EventEmitter = require('events');
// es6 可怜JavaScript class 类
class Player extends EventEmitter {}
// 实例化Player
let player = new Player();

player.on('play', (track) => {
  console.log(`正在播放：《${track}》`);
  fs.appendFile('logs/hello.log', `《${track}》\n`, error => {
    if (error) {
      console.log(error);
    } else {
      console.log('成功写入文件');
    }
  });
});

player.emit('play', '一生所爱');
player.emit('play', '刚刚好');
