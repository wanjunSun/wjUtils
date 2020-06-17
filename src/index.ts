/*
 * @Description:
 * @Author: qk
 * @Date: 2020-03-10 14:00:46
 * @LastEditors: wanjunSun
 * @LastEditTime: 2020-06-15 10:26:38
 */

let telphoneReg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/ //座机正则例如0551-5555555
let mailReg = /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/ //邮箱正则
let nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/
let regular = /[0-9]+([.]{1}[0-9]+){0,1}/ //输入整数或小数
let idCardReg = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/ //身份证验证
// 非空验证
export const isNull = (parameter: any): boolean => {
  if (parameter == null || parameter == undefined || parameter == "")
    return true
  else return false
}

//手机验证
export const isMoblePhone = (parameter: any): boolean => {
  let mobilephoneReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/ //手机号码正则
  if (!mobilephoneReg.test(parameter)) return true
  else return false
}

//电话验证
export const isTelphone = (parameter: any): boolean => {
  if (!telphoneReg.test(parameter)) return true
  else return false
}

//邮箱验证
export const isMail = (parameter: any): boolean => {
  if (!mailReg.test(parameter)) return true
  else return false
}

//中文验证
export const isName = (parameter: any): boolean => {
  if (!nameReg.test(parameter)) return true
  else return false
}

//只可输入数字或者小数
export const isNumber = (parameter: any): boolean => {
  if (!regular.test(parameter)) return true
  else return false
}
//身份证验证
export const isIdCard = (paramenter: string | number): boolean => {
  if (!idCardReg.test(paramenter.toString())) return true
  else return false
}
//验证开始时间和结束时间比较
export const timeComparison = (d1: any, d2: any): boolean => {
  let oDate1 = new Date(d1)
  let oDate2 = new Date(d2)
  if (oDate1.getTime() > oDate2.getTime()) return true
  else return false
}
//识别ie--浅识别
export const isIe = () => {
  let explorer = window.navigator.userAgent //判断是否为IE浏览器
  if (explorer.indexOf("MSIE") >= 0) {
    return true
  } else {
    return false
  }
}
//颜色转换16进制转rgba
export const hex2Rgba = (hex: string, opacity: string | number) => {
  if (!hex) hex = "#2c4dae"
  return (
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    (opacity || "1") +
    ")"
  )
}
// 解析url参数
export const getQueryString = () => {
  let qs: any = location.href.split("?")[1] || "",
    args: any = {},
    items: any = qs.length ? qs.split("&") : []
  items.forEach((item: any, i: number) => {
    let arr: any = item.split("="),
      name: any = decodeURIComponent(arr[0]),
      value: any = decodeURIComponent(arr[1])
    name.length && (args[name] = value)
  })
  return args
}
//将json转换query类型参数
export const paramsToStringify = (params: any) => {
  if (params) {
    let query = []
    for (let key in params) {
      query.push(`${key}=${params[key]}`)
    }
    return `${query.join("&")}`
  } else {
    return ""
  }
}

// 将数据转化为数组
export const toArray = (data: any) => {
  return Array.isArray(data) ? data : [data]
}

/**
 * 指定字符串 溢出显示省略号
 * @param {String} str
 * @param {Number} num
 */
export const getSubStringSum = (str: string = "", num: number = 1) => {
  let newStr: string
  if (str) {
    str = str + ""
    if (str.trim().length > num) {
      newStr = str.trim().substring(0, num) + "..."
    } else {
      newStr = str.trim()
    }
  } else {
    newStr = ""
  }
  return newStr
}

/**
 * 生成uuid
 * @param {number} len 生成指定长度的uuid
 * @param {number} radix uuid进制数
 */
export const uuid = (len: number, radix: number = 10) => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  )
  let uuid = [],
    i
  radix = radix || chars.length

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-"
    uuid[14] = "4"

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join("")
}
/**
 * @author: qk
 * @description: 去除空格
 * @param {type} 需要去除的值
 * @return:
 * @Date: 2020-03-23 16:04:57
 */
export const removeSpace = (value: string): string => {
  return value.replace(/\s/g, "")
}

/**
 * @author: qk
 * @description: 在数组中是否包含某个字段
 * @param {type} value:值 list:数组
 * @return:
 * @Date: 2020-03-23 16:03:57
 */
export const isContain = (value: any, list: []) => {
  for (let i = 0; i < list.length; i++) {
    if (value === list[i]) return true
  }
  return false
}

/**
 * @author: qk
 * @description: 解决H5响应式问题 主要关于键盘改变body高度问题
 * @param {type} body,height:改变高度,是否需要滚动
 * @return:
 * @Date: 2020-03-26 15:02:08
 */
export const highlyResponsive = (
  body: any,
  height: any = "100vh",
  scroll: boolean = true
) => {
  body.style.height = height
  if (scroll) window.scrollBy(0, 0)
}
/**
 * @author: qk
 * @description: 脱敏处理
 * @param {type} 脱敏类型:身份证idCard 、姓名 name 、电话 phone
 * @param {content} 需要处理的内容
 * @return:
 * @Date: 2020-04-18 16:10:35
 */
export const desensitization = (
  type: string = "idCard",
  content: [string, number]
): string => {
  let str = ""
  if (content) {
    let rContent = content.toString()
    if (type === "idCard") {
      str = rContent.replace(/(\d{4})\d{10}(\d|X{4})/, "$1*****$2")
    } else if (type === "phone") {
      str = rContent.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
    } else if (type === "name") {
      if (rContent.length <= 3) {
        str = "*" + rContent.substring(1, rContent.length)
      } else if (rContent.length > 3 && rContent.length <= 6) {
        str = "**" + rContent.substring(2, rContent.length)
      } else if (rContent.length > 6) {
        str =
          rContent.substring(0, 2) +
          "****" +
          rContent.substring(6, rContent.length)
      }
    }
  }
  return str
}

const ua: any = navigator.userAgent.toLowerCase()
/**
 * @author: qk
 * @description: 是否是移动端
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:06:33
 */
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

/**
 * @author: qk
 * @description: 是否是微信浏览器
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:06:54
 */

export const isWeiXin = () => {
  return ua.match(/microMessenger/i) == "micromessenger"
}
/**
 * @author: qk
 * @description: 是否是苹果手机
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:07:23
 */
export const isIos = () => {
  let u = navigator.userAgent
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false
  } else if (u.indexOf("Windows Phone") > -1) {
    //winphone手机
    return false
  } else {
    return false
  }
}

/**
 * @author: qk
 * @description: 数组去重
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:09:35
 */
export const unique = (arr: any) => {
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr))
  } else {
    let n: any = {},
      r: any = []
    for (let i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true
        r.push(arr[i])
      }
    }
    return r
  }
}
/**
 * @author: qk
 * @description: 对象或者数组是否为空
 * @param {all:对象或者数组}
 * @return:boolean
 * @Date: 2020-06-05 15:54:55
 */
export const isEmpyObj = (all: any) => {
  let dv: string = Object.prototype.toString.call(all)
  if (dv === "[object Array]") {
    if (all.length === 0) return true
  } else if (dv == "[object Object]") {
    if (Object.keys(all).length === 0) return true
  } else {
    throw new Error("请传入数组或者对象")
  }
}
/**
 * @author: wanjunSun
 * @description: 冒泡排序
 * @param {type}
 * @return: 数组
 * @Date: 2020-06-15 10:20:39
 */
export const bubbleSort = (arr: []) => {
  let len = arr.length
  if (!len) return new Error("数组为空")
  else {
    let low = 0
    let high = arr.length - 1 //设置变量的初始值
    let tmp, j
    while (low < high) {
      for (
        j = low;
        j < high;
        ++j //正向冒泡,找到最大者
      )
        if (arr[j] > arr[j + 1]) {
          tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
        }
      --high //修改high值, 前移一位
      for (
        j = high;
        j > low;
        --j //反向冒泡,找到最小者
      )
        if (arr[j] < arr[j - 1]) {
          tmp = arr[j]
          arr[j] = arr[j - 1]
          arr[j - 1] = tmp
        }
      ++low //修改low值,后移一位
      return arr
    }
  }
}
