//这里是设置的自动引入文件。
const files = require.context('.', false, /\.js$/)
const languages = {}
files.keys().forEach(key => {
  if (key === './index.js') return
  const item = files(key).default
  let name = key.replace(/.\/|.js/g, '')
  languages[name] = item || 'cn'
})

console.log(languages)
export default languages;
