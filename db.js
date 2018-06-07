// 使用 Mock
const Mock = require('mockjs');
console.log(Mock.Random.county(true));
module.exports = function() {
  let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'store|1-100': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.csentence(1, 3) + '人力资源有限公司',
        img: Mock.Random.image('200x100', '#02adea', 'Hello'),
        star: Math.floor(Math.random() * 4 + 1),
        address: Mock.Random.county(true),
        userNum: Math.floor(Math.random() * 20 + 30),
        praiseRate: '90%',
        mack: Mock.Random.pick(['公司注册', '财务审计', '财务报告', '个人社保'])
      }
    ],
    'options|1-100': [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake'
              }
            ]
          }
        ]
      }
    ]
  });
  return data;
};
