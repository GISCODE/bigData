//本来想用mock模拟数据的，但是地图数据不好模拟，特别是这里要一级级下钻
//不可能把所有的市县都写上去，那样功能量太大了，所以这里用promise  假装模拟调接口

import { getMapInfo } from "@/utils";
import request from "@/utils/request";

/**
 *  获取最近5年的城市销售额度    模拟数据，这里year属性就不用了
 *  @param {string}  abcode  城市code
 *  @param {number}  year       年份
 *  @returns {Array}
 */
export function selectCityData({ abcode, year } = params) {
  return new Promise((resolve, reject) => {
    getMapInfo(abcode)
      .then((data) => {
        const mapData = data.map((item) => {
          return {
            name: item.name,
            value: 0,
            adcode: item.adcode,
          };
        });
        resolve({
          data: mapData,
        });
      })
      .catch((error) => {
        reject(error);
      });
  }).then((rs) => {
    new Promise((resolve, reject) => {
      request.post("http://localhost:8081/basic/list", { year, types } = params)
        .then((data) => {
          console.log(data)
        })
    });
  })
}
