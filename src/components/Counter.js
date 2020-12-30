import React from'react'

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:'0'
    }
    this.increase=this.increase.bind(this);
    this.decrease=this.decrease.bind(this);
  }
  increase(){
    this.setState({count:this.state.count*1+1})
  }
  decrease(){
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <div className="card">
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>

      </div>
    )
  }
}
export default Counter;