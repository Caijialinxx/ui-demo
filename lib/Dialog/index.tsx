import React, {Fragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Icon from '../Icon';
import Button from '../Button';
import {scopeClassMaker} from '../helpers';

interface DialogProps {
  visible: boolean;
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

const alert = (content: string, title?: string) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} title={title} closeable={false} maskCloseable={false}
            footer={<Button onClick={onClose}
                            className={setCN('button__confirm')}>知道了</Button>}>
      {content}
    </Dialog>
  );
  ReactDOM.render(component, div);
};

export {alert};

export default Dialog;