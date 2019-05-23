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
  return (
    props.visible ?
      <Fragment>
        <div className={setCN('mask')} onClick={() => props.maskCloseable ? props.onCancel && props.onCancel() : null}/>
        <div className={setCN()}>
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
};

Dialog.defaultProps = {
  closeable: true,
  maskCloseable: true,
};

const alert = (contentOrProps: string | DialogFuncProps, title?: string) => {
  const _content = typeof contentOrProps === 'string' ? contentOrProps : contentOrProps.content;
  const _title = typeof contentOrProps === 'string' ? title : contentOrProps.title;
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} title={_title} closeable={false} maskCloseable={false}
            footer={<Button className={setCN('button__confirm')} autoFocus={true}
                            onClick={() => {
                              typeof contentOrProps === 'object' && contentOrProps.onOk ? contentOrProps.onOk(onClose) : onClose();
                            }}>知道了</Button>}>
      {_content}
    </Dialog>
  );
  ReactDOM.render(component, div);
};

interface DialogFuncProps {
  content: string;
  title?: string;
  onOk?: (callback: () => void) => void;
  onCancel?: (callback: () => void) => void;
}

const confirm = (props: DialogFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog visible={true} title={props.title} closeable={false} maskCloseable={false}
            footer={
              <Fragment>
                <Button autoFocus={true} onClick={() => {
                  props.onCancel ? props.onCancel(onClose) : onClose();
                }}>取消</Button>
                <Button autoFocus={true} onClick={() => {
                  props.onOk ? props.onOk(onClose) : onClose();
                }} className={setCN('button__confirm')}>确定</Button>
              </Fragment>}>
      {props.content}
    </Dialog>
  );
  ReactDOM.render(component, div);
};

export {alert, confirm};

export default Dialog;