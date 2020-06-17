export declare const isNull: (parameter: any) => boolean;
export declare const isMoblePhone: (parameter: any) => boolean;
export declare const isTelphone: (parameter: any) => boolean;
export declare const isMail: (parameter: any) => boolean;
export declare const isName: (parameter: any) => boolean;
export declare const isNumber: (parameter: any) => boolean;
export declare const isIdCard: (paramenter: string | number) => boolean;
export declare const timeComparison: (d1: any, d2: any) => boolean;
export declare const isIe: () => boolean;
export declare const hex2Rgba: (hex: string, opacity: string | number) => string;
export declare const getQueryString: () => any;
export declare const paramsToStringify: (params: any) => string;
export declare const toArray: (data: any) => any[];
/**
 * 指定字符串 溢出显示省略号
 * @param {String} str
 * @param {Number} num
 */
export declare const getSubStringSum: (str?: string, num?: number) => string;
/**
 * 生成uuid
 * @param {number} len 生成指定长度的uuid
 * @param {number} radix uuid进制数
 */
export declare const uuid: (len: number, radix?: number) => string;
/**
 * @author: qk
 * @description: 去除空格
 * @param {type} 需要去除的值
 * @return:
 * @Date: 2020-03-23 16:04:57
 */
export declare const removeSpace: (value: string) => string;
/**
 * @author: qk
 * @description: 在数组中是否包含某个字段
 * @param {type} value:值 list:数组
 * @return:
 * @Date: 2020-03-23 16:03:57
 */
export declare const isContain: (value: any, list: []) => boolean;
/**
 * @author: qk
 * @description: 解决H5响应式问题 主要关于键盘改变body高度问题
 * @param {type} body,height:改变高度,是否需要滚动
 * @return:
 * @Date: 2020-03-26 15:02:08
 */
export declare const highlyResponsive: (body: any, height?: any, scroll?: boolean) => void;
/**
 * @author: qk
 * @description: 脱敏处理
 * @param {type} 脱敏类型:身份证idCard 、姓名 name 、电话 phone
 * @param {content} 需要处理的内容
 * @return:
 * @Date: 2020-04-18 16:10:35
 */
export declare const desensitization: (type: string | undefined, content: [string, number]) => string;
/**
 * @author: qk
 * @description: 是否是移动端
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:06:33
 */
export declare const isDeviceMobile: () => boolean;
/**
 * @author: qk
 * @description: 是否是微信浏览器
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:06:54
 */
export declare const isWeiXin: () => boolean;
/**
 * @author: qk
 * @description: 是否是苹果手机
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:07:23
 */
export declare const isIos: () => boolean;
/**
 * @author: qk
 * @description: 数组去重
 * @param {type}
 * @return:
 * @Date: 2020-05-28 11:09:35
 */
export declare const unique: (arr: any) => any;
/**
 * @author: qk
 * @description: 对象或者数组是否为空
 * @param {all:对象或者数组}
 * @return:boolean
 * @Date: 2020-06-05 15:54:55
 */
export declare const isEmpyObj: (all: any) => true | undefined;
/**
 * @author: wanjunSun
 * @description: 冒泡排序
 * @param {type}
 * @return: 数组
 * @Date: 2020-06-15 10:20:39
 */
export declare const bubbleSort: (arr: []) => [] | Error | undefined;
