import React from 'react';
import {Input} from '@/index';

const InputDemo6: React.FunctionComponent = () => {
  return (
    <div>
      <div style={{marginBottom: '8px'}}>
        <Input.TextArea rows={2}/>
      </div>
      <div style={{marginBottom: '8px'}}>
        <Input.TextArea autosize placeholder="Autosize height based on content lines"/>
      </div>
      <div style={{marginBottom: '8px'}}>
        <Input.TextArea
          autosize={{minRows: 3, maxRows: 5}}
          placeholder="Autosize height with minimum and maximum number of lines"/>
      </div>
    </div>
  );
};

export default InputDemo6;