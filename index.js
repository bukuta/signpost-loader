module.exports = function(content, map, meta) {
  if (this.cacheable) this.cacheable();
  let resourcePath = this.resourcePath;
  let loaderIndex = this.loaderIndex;
  let loaders = this.loaders;

  let options = typeof (this.query) == 'object' ? this.query : {};
  let fileType = options.type;

  let injectHeader = '';
  // 根据不同文件类型添加注释
  if ((['css', 'js', 'less', 'sass']).includes(fileType)) {
    injectHeader = "/*" + resourcePath + " [signpost-loader]*/\n\n";
  }
  this.callback(null, injectHeader + content, map, meta);
  return;
}
