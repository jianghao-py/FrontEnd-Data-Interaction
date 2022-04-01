// 分配十个位置
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.allocUnsafe(10);

// 16进制的字符编码
const buf3 = Buffer.from("hellow"); 
console.log(buf3); //<Buffer 68 65 6c 6c 6f 77>


// 读取内容，ASCII对应编码
console.log(buf3[0]); //104
//转换为字符串
console.log(String.fromCharCode(buf3[0])); //h

// 转化整体为字符串
console.log(buf3.toString()); //hellow


// 设置buffer
buf3[0] = 99;
console.log(buf3.toString()); //cellow


// 溢出，最大255，舍弃高于 8 位的内容
buf3[1] = 300;
console.log(buf3.toString()); //c,llow


// 中文，utf-8中文字符每个占据3个字符
const buf4 = Buffer.from("真厉害");
console.log(buf4); //<Buffer 9ce7  9f e5 8e 89 e5 ae b3>


