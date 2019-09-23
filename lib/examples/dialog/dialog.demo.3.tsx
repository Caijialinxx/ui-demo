import React from 'react';
import {Button, Dialog} from '../../index';

const DialogDemo3: React.FunctionComponent = () => {
  return (
    <div>
      <div style={{marginBottom: '8px'}}>
        <Button
          onClick={() => {
            Dialog.alert('这是一条警告', '简单的 Alert 调用');
          }}
        >
          简单的 Alert 调用
        </Button>
      </div>
      <div style={{marginBottom: '8px'}}>
        <Button
          onClick={() => {
            Dialog.alert({
              content: '这是一条警告',
              title: '更多选项的 Alert 调用',
              confirmButtonText: '知道了',
              onOk: (close) => {
                console.log('您点击了「知道了」');
                close();
              }
            });
          }}
        >
          更多选项的 Alert 调用
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            Dialog.confirm({
              content: '这是一个确认框',
              title: '简单的 Confirm 调用',
              onOk: (close) => {
                console.log('您点击了「确定」');
                close();
              }
            });
          }}
        >
          简单的 Confirm 调用
        </Button>
      </div>
    </div>
  );
};

export default DialogDemo3;