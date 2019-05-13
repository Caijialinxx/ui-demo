import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

const fn = (e) => {
  console.log(e.target.href);
};

ReactDOM.render(<div>
  <Icon name="emoji-happy" className="icon" onClick={fn} onMouseEnter={() => console.log('enter')}/>
  <Icon name="emoji-cool"/>
  <Icon name="emoji-shocked"/>
</div>, document.getElementById('app'));