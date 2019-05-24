import React, {Fragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Icon from '../Icon';
import Button from '../Button';
import {scopeClassMaker} from '../helpers';

interface DialogProps {
  visible?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title?: string | ReactNode;
  footer?: null | ReactNode;
  maskCloseable?: boolean;
  closeable?: boolean;
}

const setClassName = scopeClassMaker('cui-dialog');
const setCN = setClassName;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const dialogComponent = (
    props.visible ?
      <Fragment>
        <div className={setCN('mask')} onClick={() => props.maskCloseable ? props.onCancel && props.onCancel() : null}/>
        <div className={setCN('')}>
          {props.closeable ?
            <button onClick={props.onCancel} className={setCN('close')}><Icon name="close"/></button> : null}
          {
            !!props.title ? <header className={setCN('header')}>{props.title}</header> : null
          }
          <main className={setCN('body')}>
            {props.children}
          </main>
          {
            props.footer === null ? null : (
              <footer className={setCN('footer')}>
                {
                  !!props.footer ? props.footer :
                    <Fragment>
                      <Button onClick={props.onCancel}>取消</Button>
                      <Button className={setCN('button__confirm')} onClick={props.onOk}>确定</Button>
                    </Fragment>
                }
              </footer>)
          }
        </div>
      </Fragment>
      : null
  );
  return ReactDOM.createPortal(dialogComponent, document.body);
};

Dialog.defaultProps = {
  closeable: true,
  maskCloseable: true,
};

interface DialogFuncProps {
  content: string;
  title?: string;
  onOk?: (callback: () => void) => void;
  onCancel?: (callback: () => void) => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const alert = (contentOrProps: string | DialogFuncProps, title?: string) => {
  const _content = typeof contentOrProps === 'string' ? contentOrProps : contentOrProps.content;
  const _title = typeof contentOrProps === 'string' ? title : contentOrProps.title;
  const close = common({
    title: _title,
    content: _content,
    footer: (<Button className={setCN('button__confirm')} autoFocus={true}
                     onClick={() => {
                       typeof contentOrProps === 'object' && contentOrProps.onOk ? contentOrProps.onOk(close) : close();
                     }}>
      {typeof contentOrProps === 'object' && contentOrProps.confirmButtonText ? contentOrProps.confirmButtonText : '知道了'}
    </Button>),
  });
};

const confirm = (props: DialogFuncProps) => {
  const close = common({
    footer: (
      <Fragment>
        <Button onClick={() => {
          props.onCancel ? props.onCancel(close) : close();
        }}>
          {props.cancelButtonText ? props.cancelButtonText : '取消'}
        </Button>
        <Button onClick={() => {
          props.onOk ? props.onOk(close) : close();
        }} className={setCN('button__confirm')}>
          {props.confirmButtonText ? props.confirmButtonText : '确定'}
        </Button>
      </Fragment>),
    ...props
  });
};

const common = (dialogProps: any) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog visible={true} title={dialogProps.title} closeable={false} maskCloseable={false}
            footer={dialogProps.footer}>
      {dialogProps.content}
    </Dialog>
  );
  ReactDOM.render(component, div);
  return onClose;
};

export {alert, confirm};

export default Dialog;