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
      },

      {
        value: '内蒙古自治区',
        label: '内蒙古自治区',
        children: [
          {
            value: '赤峰市',
            label: '赤峰市',
            children: [
              {
                value: '喀喇沁旗',
                label: '喀喇沁旗'
              }
            ]
          }
        ]
      },
      {
        value: '吉林省',
        label: '吉林省',
        children: [
          {
            value: '松原市',
            label: '松原市',
            children: [
              {
                value: '长岭县',
                label: '长岭县'
              }
            ]
          }
        ]
      },
      {
        value: '天津',
        label: '天津',
        children: [
          {
            value: '天津市',
            label: '天津市',
            children: [
              {
                value: '河西区',
                label: '河西区'
              }
            ]
          }
        ]
      },
      {
        value: '山东省',
        label: '山东省',
        children: [
          {
            value: '青岛市',
            label: '青岛市',
            children: [
              {
                value: '其它区',
                label: '其它区'
              }
            ]
          }
        ]
      },
      {
        value: '广东省',
        label: '广东省',
        children: [
          {
            value: '韶关市',
            label: '韶关市',
            children: [
              {
                value: '曲江区',
                label: '曲江区'
              }
            ]
          }
        ]
      },
      {
        value: '广西壮族自治区',
        label: '广西壮族自治区',
        children: [
          {
            value: '梧州市',
            label: '梧州市',
            children: [
              {
                value: '蒙山县',
                label: '蒙山县'
              }
            ]
          },
          {
            value: '钦州市',
            label: '钦州市',
            children: [
              {
                value: '浦北县',
                label: '浦北县'
              }
            ]
          },
          {
            value: '防城港市',
            label: '防城港市',
            children: [
              {
                value: '东兴市',
                label: '东兴市'
              }
            ]
          }
        ]
      },

      {
        value: '江苏省',
        label: '江苏省',
        children: [
          {
            value: '泰州市',
            label: '泰州市',
            children: [
              {
                value: '姜堰区',
                label: '姜堰区'
              }
            ]
          },
          {
            value: '苏州市',
            label: '苏州市',
            children: [
              {
                value: '常熟市',
                label: '常熟市'
              }
            ]
          }
        ]
      },
      {
        value: '河南省',
        label: '河南省',
        children: [
          {
            value: '三门峡市',
            label: '三门峡市',
            children: [
              {
                value: '渑池县',
                label: '渑池县'
              }
            ]
          }
        ]
      },
      {
        value: '海南省',
        label: '海南省',
        children: [
          {
            value: '海口市',
            label: '海口市',
            children: [
              {
                value: '琼山区',
                label: '琼山区'
              }
            ]
          }
        ]
      },

      {
        value: '湖北省',
        label: '湖北省',
        children: [
          {
            value: '黄冈市',
            label: '黄冈市',
            children: [
              {
                value: '武穴市',
                label: '武穴市'
              }
            ]
          },
          {
            value: '十堰市',
            label: '十堰市',
            children: [
              {
                value: '其它区',
                label: '其它区'
              }
            ]
          }
        ]
      },
      {
        value: '澳门特别行政区',
        label: '澳门特别行政区',
        children: [
          {
            value: '离岛',
            label: '离岛',
            children: [
              {
                value: '-',
                label: '-'
              }
            ]
          }
        ]
      },

      {
        value: '福建省',
        label: '福建省',
        children: [
          {
            value: '龙岩市',
            label: '龙岩市',
            children: [
              {
                value: '连城县',
                label: '连城县'
              }
            ]
          },
          {
            value: '莆田市',
            label: '莆田市',
            children: [
              {
                value: '仙游县',
                label: '仙游县'
              }
            ]
          },
          {
            value: '漳州市',
            label: '漳州市',
            children: [
              {
                value: '龙文区',
                label: '龙文区'
              }
            ]
          },
          {
            value: '龙岩市',
            label: '龙岩市',
            children: [
              {
                value: '上杭县',
                label: '上杭县'
              }
            ]
          },
          {
            value: '福州市',
            label: '福州市',
            children: [
              {
                value: '福清市',
                label: '福清市'
              }
            ]
          }
        ]
      },

      {
        value: '西藏自治区',
        label: '西藏自治区',
        children: [
          {
            value: '日喀则地区',
            label: '日喀则地区',
            children: [
              {
                value: '萨嘎县',
                label: '萨嘎县'
              }
            ]
          }
        ]
      },

      {
        value: '贵州省',
        label: '贵州省',
        children: [
          {
            value: '安顺市',
            label: '安顺市',
            children: [
              {
                value: '平坝县',
                label: '平坝县'
              }
            ]
          },
          {
            value: '黔东南苗族侗族自治州',
            label: '黔东南苗族侗族自治州',
            children: [
              {
                value: '黄平县',
                label: '黄平县'
              }
            ]
          }
        ]
      },

      {
        value: '重庆',
        label: '重庆',
        children: [
          {
            value: '重庆市',
            label: '重庆市',
            children: [
              {
                value: '大渡口区',
                label: '大渡口区'
              },
              {
                value: '双桥区',
                label: '双桥区'
              }
            ]
          }
        ]
      },
      {
        value: '黑龙江省',
        label: '黑龙江省',
        children: [
          {
            value: '鹤岗市',
            label: '鹤岗市',
            children: [
              {
                value: '萝北县',
                label: '萝北县'
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
      address: Mock.Random.county(true),
      userNum: Math.floor(Math.random() * 20 + 30),
      praiseRate: Math.floor(Math.random() * 50 + 50) + '%',
      mack: ['公司注册', '财务审计', '财务报告', '个人社保']
    });
  }

  return data;
};
