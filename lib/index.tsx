import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

const fn = () => {
  console.log('click');
};

ReactDOM.render(<div>
  <Icon name="emoji-happy" className="icon" onClick={fn}/>
  <Icon name="emoji-cool"/>
  <Icon name="emoji-shocked"/>
</div>, document.getElementById('app'));