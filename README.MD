# wjUtils

#### 如何使用
引用 dist 文件下 wjUtils文件


#### 工具包含的方法

|     方法名称      |           作用           |    参数类型     |                   举例                    |            返回            |
| :---------------: | :----------------------: | :-------------: | :---------------------------------------: | :------------------------: |
|      isNull       |        是否为空值        |       any       |               isNull(value)               |          boolean           |
|   isMoblePhone    |         手机验证         |       any       |            isMoblePhone(value)            |          boolean           |
|    isTelphone     |         电话验证         |       any       |             isTelphone(value)             |          boolean           |
|      isMail       |         邮箱验证         |       any       |               isMail(value)               |          boolean           |
|      isName       |         中文名字         |       any       |               isName(value)               |          boolean           |
|     isNumber      |     数字或者小数验证     |       any       |              isNumber(value)              |          boolean           |
|  timeComparison   |         时间对比         |   （any,any）   | timeComparison("2020-02-13","2020-02-12") | boolean（true:第一个值大） |
|       isIe        |         浅识别ie         |                 |                                           |                            |
|     hex2Rgba      |   颜色转换16进制转rgba   | (string,number)  |        hex2Rgba(16进制颜色,透明度)        |       rgba(0,0,0,1)        |
|  getQueryString   |   解析地址参数转成Json   |                 |             getQueryString()              |           object           |
| paramsToStringify | 将json转换query类型参数  |     string      |      paramsToStringify(对象)      |           string           |
|      toArray      |       json转换数组       |       any       |           toArray("1,22,3")           |          [1,2,3]          |
|  getSubStringSum  | 指定字符串溢出显示省略号 |  （string,nubner）  |        getSubStringSum(“123154”,5)        |           1231...           |
|       uuid        |         生成uuid         | (number,number) |             uuid(长度,进制数)             |           string           |
| removeSpace | 移除空格 | string | removeSpace(" test ") | test/string |

