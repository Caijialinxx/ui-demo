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

interface DialogApis {
  alert(contentOrProps: DialogAlertProps, title?: string): void;
  confirm(props: DialogFuncProps): void;
}

type Dialog = React.FunctionComponent<DialogProps> & DialogApis

const setClassName = scopeClassMaker('cui-dialog');
const setCN = setClassName;

const Dialog: Dialog = (props) => {
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
  content: ReactNode;
  title?: string;
  onOk?: (callback: () => void) => void;
  onCancel?: (callback: () => void) => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  // TODO: confirmButtonProps & cancelButtonProps
}

type DialogAlertProps = string | DialogFuncProps

Dialog.alert = (contentOrProps: DialogAlertProps, title?: string) => createDialog('alert', Object.assign({}, contentOrProps, {
  //重新赋值props
  content: typeof contentOrProps === 'string' ? contentOrProps : contentOrProps.content,
  title: typeof contentOrProps === 'string' ? title : contentOrProps.title
}));

Dialog.confirm = (props: DialogFuncProps) => createDialog('confirm', props);

const createDialog = (type: string, props: DialogFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const confirmButton = (
    <Button
      autoFocus={true}
      className={setCN('button__confirm')}
      onClick={() => {props.onOk ? props.onOk(onClose) : onClose();}}
    >
      {props.confirmButtonText ? props.confirmButtonText : '确定'}
    </Button>);
  const footer = type === 'confirm' ?
    (<Fragment>
        <Button onClick={() => {
          props.onCancel ? props.onCancel(onClose) : onClose();
        }}>
          {props.cancelButtonText ? props.cancelButtonText : '取消'}
        </Button>
        {confirmButton}
      </Fragment>
    ) : confirmButton;

  const component = (
    <Dialog visible={true} title={props.title} closeable={false} maskCloseable={false}
            footer={footer}>
      {props.content}
    </Dialog>
  );
  ReactDOM.render(component, div);
};

export default Dialog;