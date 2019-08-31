import React, {Fragment} from 'react';
import {Button, Dialog} from '../../index';

const DialogDemo3: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Button
        onClick={() => {
          Dialog.alert('这是一条警告', '简单的 Alert 调用')
        }}
      >
        简单的 Alert 调用
      </Button>

      <Button
        onClick={() => {
          Dialog.alert({
            content: '这是一条警告',
            title: '更多选项的 Alert 调用',
            onOk: (close) => {
              console.log('您点击了「知道了」');
              close();
            }
          });
        }}
      >
        更多选项的 Alert 调用
      </Button>

      <Button
        onClick={() => {
          Dialog.confirm({
            content: '这是一个确认框',
            title: 'Confirm',
            onOk: (close) => {
              console.log('您点击了「确定」');
              close();
            },
            onCancel: (close) => {
              console.log('您点击了「取消」');
              close();
            }
          });
        }}
      >
        Confirm
      </Button>
    </Fragment>
  );
};

export default DialogDemo3;