import React, {Fragment, useState} from 'react';
import {Dialog, Button, alert, confirm} from '../index';

const DialogExample: React.FunctionComponent = () => {
  const [example1, setExample1] = useState(false);
  const [example2, setExample2] = useState(false);
  return (
    <div>
      <Fragment>
        <Button onClick={() => setExample1(!example1)}>基本的Dialog</Button>
        <Dialog title="标题" visible={example1} onOk={() => setExample1(false)} onCancel={() => setExample1(false)}>
          这里是内容。
        </Dialog>
      </Fragment>
      <Fragment>
        <Button onClick={() => setExample2(!example2)}>自定义footer</Button>
        <Dialog title="自定义footer" footer={<Button onClick={() => setExample2(false)}>知道了</Button>} visible={example2}
                onCancel={() => setExample2(false)}>
          <Fragment>
            <p>设置footer为null可取消默认的脚部</p>
            <p>还可以设置footer为一个ReactNode类型来可自定义脚部</p>
          </Fragment>
        </Dialog>
      </Fragment>
      <Fragment>
        <Button onClick={() => {
          alert({
            content: '这是一条警告',
            title: '标题',
            onOk: (close) => {
              console.log('知道了');
              close();
            }
          });
        }}>alert</Button>
        <Button onClick={() => {
          confirm({
            content: '这是一个确认框',
            title: 'Confirm',
            onOk: (close) => {
              console.log('按了确定');
              close();
            }
          });
        }}>confirm</Button>
      </Fragment>
    </div>
  );
};

export default DialogExample;