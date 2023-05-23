import React, {useState} from 'react';
import {Button, Dialog} from '@/index';

const DialogDemo1: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Dialog
        title="提示"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        这是一个简单的对话框。
      </Dialog>

      <Button onClick={() => setVisible(true)}>
        点击打开 Dialog
      </Button>
    </div>
  );
};

export default DialogDemo1;