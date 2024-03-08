// 解析 JSON 字符串
function parseJSON(jsonString) {
  return JSON.parse(jsonString);
}

// 格式化 JSON 对象
function formatJSON(jsonObject) {
  return JSON.stringify(jsonObject, null, 2);
}

// 检查文件/文件夹是否存在
function checkFileOrFolderExists(filePath) {
  return fs.existsSync(filePath);
}

// 读取文件夹内容
function readFolderContents(folderPath) {
  return fs.readdirSync(folderPath);
}