/*
 * @Author: yutaiqi
 * @Date: 2024-01-16 21:43:33
 * @LastEditTime: 2024-01-18 22:53:39
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /sytstudy/src/api/home/type.ts
 */
// 返回医院数据
export interface Hospital {
        id: string;
        createTime: Date;
        updateTime: Date;
        isDeleted: number,
        param: {
            hostypeString: string
            fullAddress: string
        },
        hoscode: string
        hosname: string
        hostype: string
        provinceCode: string
        cityCode: string
        districtCode: string
        address: string
        logoData: string
        intro: string
        route: string
        status: number
        bookingRule: {
            cycle: 10,
          releaseTime: string,
          stopTime: string,
          quitDay: number,
          quitTime: string,
          rule: Array<string>
        }
}

// 医院数据list
export type HospitalData = Hospital[]

// 医院接口返回数据
export type HospitalDataRes = {
        content: HospitalData,
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "paged": boolean,
            "unpaged": boolean
        },
        "totalPages": number,
        "totalElements": number,
        "last": boolean,
        "first": boolean,
        "sort": {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean
}

// 医院等级数据
export interface HospitalDic {
    "id": number,
      "createTime": string,
      "updateTime": string,
      "isDeleted": number,
      "param": {},
      "parentId": number,
      "name": string,
      "value": string,
      "dictCode": string,
      "hasChildren": boolean
}

// 医院等级数据list
export type HospitalDicData = HospitalDic[]