# wj_utils

> [项目地址](https://github.com/wanjunSun/wjUtils)有什么需要的可以提issues

#### js 导入

引用 dist 文件下 wj_utils.js 文件

```javascript
wjUtils.desensitization()
```

#### npm 导入

npm i wj_utils -S

```javascript
import { isNull, desensitization } from "wj_utils"
export default {
  mounted() {
    desensitization("idCard", "340521199912121321")
  },
}
```

#### 工具包含的方法

|     方法名称      |                 作用                 |             参数类型              | 举例                                      |         可选参数         | 返回                       |
| :---------------: | :----------------------------------: | :-------------------------------: | :---------------------------------------- | :----------------------: | -------------------------- |
|      isNull       |              是否为空值              |                any                | isNull(value)                             |                          | boolean                    |
|   isMoblePhone    |               手机验证               |                any                | isMoblePhone(value)                       |                          | boolean                    |
|    isTelphone     |               电话验证               |                any                | isTelphone(value)                         |                          | boolean                    |
|      isMail       |               邮箱验证               |                any                | isMail(value)                             |                          | boolean                    |
|      isName       |               中文验证               |                any                | isName(value)                             |                          | boolean                    |
|     isIdCard      |              身份证验证              |         (string\|number)          | isIdCard(value)                           |                          | boolean                    |
|     isNumber      |           数字或者小数验证           |                any                | isNumber(value)                           |                          | boolean                    |
|  timeComparison   |               时间对比               |            （any,any）            | timeComparison("2020-02-13","2020-02-12") |                          | boolean（true:第一个值大） |
|       isIe        |              浅识别 ie               |                                   |                                           |                          |                            |
|     hex2Rgba      |       颜色转换 16 进制转 rgba        |          (string,number)          | hex2Rgba(16 进制颜色,透明度)              |                          | rgba(0,0,0,1)              |
|  getQueryString   |        解析地址参数转成 Json         |                                   | getQueryString()                          |                          | object                     |
| paramsToStringify |     将 json 转换 query 类型参数      |              string               | paramsToStringify(对象)                   |                          | string                     |
|      toArray      |            json 转换数组             |                any                | toArray("1,22,3")                         |                          | [1,2,3]                    |
|  getSubStringSum  |       指定字符串溢出显示省略号       |         （string,nubner）         | getSubStringSum(“123154”,5)               |                          | 1231...                    |
|       uuid        |              生成 uuid               |          (number,number)          | uuid(长度,进制数)                         |                          | string                     |
|    removeSpace    |               移除空格               |              string               | removeSpace(" test ")                     |                          | test/string                |
|     isContain     |               是否包含               |           （any,array）           | isContain(a,["a","b"])                    |                          | boolean                    |
| highlyResponsive  | 给 h5 使用主要解决键盘上移影响到样式 |         (any,any,boolean)         | 下面所示（1.1）                           |                          |                            |
|  desensitization  |               脱敏验证               | (type:any,content:string\|number) | 下面所示（1.2）                           | type:idCard\|phone\|name | string                     |
|  isDeviceMobile   |             是否是移动端             |                                   |                                           |                          | boolean                    |
|     isWeiXin      |           是否是微信浏览器           |                                   |                                           |                          | boolean                    |
|       isIos       |            是否是苹果手机            |                                   |                                           |                          | boolean                    |
|      unique       |                 去重                 |           对象或者数组            |                                           |                          | 数组                       |
|     isEmpyObj     |           对象或者数组为空           |           对象或者数组            |                                           |                          | boolean                    |
|    bubbleSort     |               冒泡排序               |               数组                |                                           |                          | 数组                       |
|    systemTime     |             系统当前时间             |                                   |                                           |                          | xxxx年xx月xx日 x时x分x秒   |

#### 1.1--highlyResponsive 使用方式

_HTML_

```html
<input onfocus = "onFocus()"></input>
```

_JS_

```
function onFocus(){
  let body = document.getElementById("test")
  highlyResponsive(body,"100vh",false);
}
```

`第一个参数传入页面元素`

`第二个参数传入调整的高度`

`第三个参数 默认true 作用是否滚到顶端 如果不需要设置为false`

#### 1.2--desensitization 使用方式

```javascript
wjUtils.desensitization("idCard", "340521199912121321") //3405*****1321
wjUtils.desensitization("phone", "13965621111") //139****111
wjUtils.desensitization("name", "张三") //*三
```



#### 1.3--systemTime 使用

```
let timeUpDate = timeupdate();
let test = document.getElementById('test')
setTimeout(()=>{test.innerHTML = timeUpdate()}, 1000)
```

