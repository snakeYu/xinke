import React from 'react';
import { addTodo, delTodo, asyncDelStu } from './actions';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let input;
    return (
      <div>
        <input
          type="text"
          ref={node => {
            input = node;
          }}
        />
        <input
          type="button"
          value="添加"
          onClick={() => {
            if (input.value === '') {
              alert('请输入');
            } else {
              this.props.add(input.value);
              input.value = '';
            }
          }}
        />
        <label>
          {this.props.data.todo.map((item, index) => {
            return (
              <p
                key={index}
                style={{
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}
                onClick={() => {
                  this.props.del(item);
                }}
              >
                {item.text}
              </p>
            );
          })}
        </label>
      </div>
    );
  }
  componentDidMount() {
    this.props.asyncDelStu();
  }
  componentWillMount() {}
}
const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch(addTodo(text));
    },
    del: text => {
      dispatch(delTodo(text));
    },
    asyncDelStu: () => {
      dispatch(asyncDelStu());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
