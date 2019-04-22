import Mock from 'mockjs'
let data = [{
  "id": 100,
  "name": "China",
  "population": "1,600,000,000",
  "children": [
    {
      "id": 1000,
      "name": "安徽省",
      "population|100-1000": 300,
      "children|5-8": [{
        "id|+1": 10000,
        "name|+1": ["合肥市", "安庆市", "六安市", "淮南市", "淮北市", "池州市", "宿州市", "铜陵市"]
      }]
    },
    {
      "id": 1001,
      "name": "江苏省",
      "population|100-800": 200,
      "children|2-6": [{
        "id|+1": 20000,
        "name|+1": ["南京市", "苏州市", "无锡市", "昆山市", "徐州市", "盐城市"]
      }]
    },
    {
      "id": 1002,
      "name": "上海市",
      "population|100-500": 100
    }
  ]
}]
Mock.mock(/mock\/treeData/, data)