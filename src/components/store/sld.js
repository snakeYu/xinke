import React from 'react';

import { Select } from 'antd';
const Option = Select.Option;

const provinceData = [
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
          },
          {
            value: '彝良县',
            label: '彝良县'
          }
        ]
      }
    ]
  }
];

class Sld extends React.Component {
  state = {
    cities: provinceData[0],
    secondCity: provinceData[0].children[0],
    threeCity: provinceData[0].children[0].children[0]
  };
  handleProvinceChange = (value, i) => {
    provinceData.forEach(item => {
      if (item.value === value) {
        this.setState({
          cities: item,
          secondCity: item.children[0],
          threeCity: item.children[0].children[0]
        });
      }
    });
  };
  onSecondCityChange = value => {
    this.state.cities.children.forEach(item => {
      if (item.value === value) {
        this.setState({
          secondCity: item,
          threeCity: item.children[0]
        });
      }
    });
  };
  onThreeCityChange = value => {
    this.state.secondCity.children.forEach(item => {
      if (item.value === value) {
        this.setState({
          threeCity: item
        });
      }
    });
  };
  render() {
    const provinceOptions = provinceData.map(province => (
      <Option key={province.value}>{province.value}</Option>
    ));
    const cityOptions = this.state.cities.children.map(city => (
      <Option key={city.value}>{city.value}</Option>
    ));
    const threecityOptions = this.state.secondCity.children.map(three => (
      <Option key={three.value}>{three.value}</Option>
    ));
    return (
      <div>
        <Select
          defaultValue={provinceData[0].value}
          style={{ width: 90 }}
          onChange={this.handleProvinceChange}
        >
          {provinceOptions}
        </Select>
        <Select
          value={this.state.secondCity.value}
          style={{ width: 90 }}
          onChange={this.onSecondCityChange}
        >
          {cityOptions}
        </Select>
        <Select
          value={this.state.threeCity.value}
          style={{ width: 90 }}
          onChange={this.onThreeCityChange}
        >
          {threecityOptions}
        </Select>
      </div>
    );
  }
}
export default Sld;
