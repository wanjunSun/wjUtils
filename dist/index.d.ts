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
