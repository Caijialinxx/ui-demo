import React, {useState} from 'react';
import {Button, Dialog, Icon} from '../../index';

const DialogDemo2: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const handleOk: React.MouseEventHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Dialog
        title="验证邮箱"
        closeable={false}
        maskCloseable={false}
        visible={visible}
        footer={[
          <Button onClick={() => setVisible(false)}>取消</Button>,
          <Button onClick={handleOk}>
            发送验证邮件{loading && <Icon name="loading"/>}
          </Button>
        ]}>
        <div>
          E-mail：<input value={email} onChange={handleChange} type="text"/>
        </div>
      </Dialog>

      <Button onClick={() => setVisible(true)}>
        点击打开一个嵌套表单的 Dialog
      </Button>
    </div>
  );
};

export default DialogDemo2;