//本来想用mock模拟数据的，但是地图数据不好模拟，特别是这里要一级级下钻
//不可能把所有的市县都写上去，那样功能量太大了，所以这里用promise  假装模拟调接口

import { getMapInfo } from "@/utils";
import request from "@/utils/request";

/**
 *  获取最近5年的城市销售额度    模拟数据，这里year属性就不用了
 *  @param {string}  abcode  城市code
 *  @param {string}  types     数据类型
 *  @param {number}  year       年份
 *  @returns {Array}
 */
export function selectCityData({ abcode, year, types } = params) {
  const data = getMapInfo(abcode)
    .then((data) => {
      const mapData = data.map((item) => {
        return {
          name: item.name,
          value: (Math.random() * 1000).toFixed(2),
          adcode: item.adcode,
        };
      });
      return mapData
    })
  console.log(data)
  const param = [{ "year": year, "types": types }]
  const data1 = request.post("http://localhost:8081/basic/list", param)
  console.log(data1)
}
