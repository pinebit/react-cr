import React from 'react';
import ReactDOM from 'react-dom';
import {
  Visibility,
  Switch,
  Mobile,
  Desktop,
  Repeat
} from '../src';

const Child = ({ text }) => (
  <h4 style={{ border: 'solid 1px green', width: 400 }}>{text}</h4>
);

class SampleUsage extends React.PureComponent {
  state = {
    visibilityVisible: true,
    switchIndex: 0,
    repeatCount: 3
  };

  toggleVisible = () => {
    this.setState({
      ...this.state,
      visibilityVisible: !this.state.visibilityVisible
    });
  };

  onSwitchChange = (e) => {
    this.setState({
      ...this.state,
      switchIndex: Number(e.target.value)
    });
  };

  onRepeatCountChange = (e) => {
    this.setState({
      ...this.state,
      repeatCount: Number(e.target.value)
    });
  };

  render() {
    return (
      <div>

        <h1><pre>Visibility component</pre></h1>
        <section>
          <button onClick={this.toggleVisible}>Toggle visible property</button>
          <Visibility visible={this.state.visibilityVisible}>
            <Child text="I am visible now!" />
          </Visibility>
          <Visibility visible={this.state.visibilityVisible}>
            <Child text="I am also visible and wrapped" />
            <Child text="because of two children" />
          </Visibility>
        </section>

        <hr />

        <h1><pre>Switch component</pre></h1>
        <section>
          <select value={this.state.switchIndex} onChange={this.onSwitchChange}>
            <option value={0}>index = 0 (valid)</option>
            <option value={1}>index = 1 (valid)</option>
            <option value={2}>index = 2 (valid)</option>
            <option value={3}>index = 3 (wrong)</option>
          </select>
          <Switch index={this.state.switchIndex}>
            <Child text="Child 1" />
            <Child text="Child 2" />
            <Child text="Child 3" />
          </Switch>
        </section>

        <hr />

        <h1><pre>Mobile & Desktop components</pre></h1>
        <section>
          <Mobile>
            <Child text="You are on a mobile device!" />
          </Mobile>
          <Desktop>
            <Child text="You are on a desktop device!" />
          </Desktop>
        </section>

        <hr />

        <h1><pre>Repeat component</pre></h1>
        <section>
          <input type="number" value={this.state.repeatCount} onChange={this.onRepeatCountChange} min={0} max={10} />
          <Repeat count={this.state.repeatCount}>
            <Child text="item" />
          </Repeat>
        </section>

      </div>
    );
  }
}

ReactDOM.render(
  <SampleUsage />,
  document.getElementById('app'),
);
