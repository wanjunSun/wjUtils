export declare const isNull: (parameter: any) => boolean;
export declare const isMoblePhone: (parameter: any) => boolean;
export declare const isTelphone: (parameter: any) => boolean;
export declare const isMail: (parameter: any) => boolean;
export declare const isName: (parameter: any) => boolean;
export declare const isNumber: (parameter: any) => boolean;
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
 * @author: wanjunSun
 * @description: 去除空格
 * @param {type} 需要去除的值
 * @return:
 * @Date: 2020-03-23 16:04:57
 */
export declare const removeSpace: (value: string) => string;
/**
 * @author: wanjunSun
 * @description: 在数组中是否包含某个字段
 * @param {type} value:值 list:数组
 * @return:
 * @Date: 2020-03-23 16:03:57
 */
export declare const isContain: (value: any, list: []) => boolean;
/**
 * @author: wanjunSun
 * @description: 解决H5响应式问题 主要关于键盘改变body高度问题
 * @param {type} body,height:改变高度,是否需要滚动
 * @return:
 * @Date: 2020-03-26 15:02:08
 */
export declare const highlyResponsive: (body: any, height?: any, scroll?: boolean) => void;
/**
 * @author: wanjunSun
 * @description: 脱敏处理
 * @param {type} 脱敏类型:身份证idCard 、姓名 name 、电话 phone
 * @param {content} 需要处理的内容
 * @return:
 * @Date: 2020-04-18 16:10:35
 */
export declare const desensitization: (type: string | undefined, content: [string, number]) => string;
