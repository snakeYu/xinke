module.exports = function() {
  // 使用 Mock
  const Mock = require('mockjs');
  // console.log(Mock.Random.county(true));
  let data = {
    store: [],
    options: [
      {
        value: '上海',
        label: '上海',
        children: [
          {
            value: '上海市',
            label: '上海市',
            children: [
              {
                value: '浦东新区',
                label: '浦东新区'
              },
              {
                value: '嘉定区',
                label: '嘉定区'
              }
            ]
          }
        ]
      },

      {
        value: '云南省',
        label: '云南省',
        children: [
          {
            value: '昭通市',
            label: '昭通市',
            children: [
              {
                value: '彝良县',
                label: '彝良县'
              }
            ]
          },
          {
            value: '德宏傣族景颇族自治州',
            label: '德宏傣族景颇族自治州',
            children: [
              {
                value: '芒市',
                label: '芒市'
              }
            ]
          }
        ]
      }
    ]
  };
  for (let i = 0; i < 30; i++) {
    data.store.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: i + 1,
      name: Mock.Random.csentence(1, 3) + '人力资源有限公司',
      img: Mock.Random.image('200x100', '#02adea', 'Hello'),
      star: Math.floor(Math.random() * 4 + 1),
      address: data.options[Math.ceil(Math.random() * 0 + 1)].value,
      userNum: Math.floor(Math.random() * 20 + 30),
      praiseRate: Math.floor(Math.random() * 50 + 50) + '%',
      mack: ['公司注册', '财务审计', '财务报告', '个人社保']
    });
  }

  return data;
};
