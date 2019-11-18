import React, {ChangeEventHandler, useState} from 'react';
import {Checkbox} from '../../index';

const CheckboxDemo5: React.FunctionComponent = () => {
  const plainOptions = ['苹果', '香蕉', '橘子'];
  const defaultList = ['苹果', '橘子'];
  const [checkedState, setCheckedState] = useState({
    indeterminate: true,
    checkAll: false,
    checkedList: defaultList,
  });
  const handleCheckAllChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheckedState({
      indeterminate: false,
      checkAll: e.target.checked,
      checkedList: e.target.checked ? plainOptions : []
    });
  };
  const handleGroupChange = (checkedList: string[]) => {
    setCheckedState({
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
      checkedList
    });
  };
  return (
    <div>
      <div style={{borderBottom: '1px solid #E9E9E9'}}>
        <Checkbox
          indeterminate={checkedState.indeterminate}
          onChange={handleCheckAllChange}
          checked={checkedState.checkAll}
        >
          全选
        </Checkbox>
      </div>
      <br/>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={defaultList}
        value={checkedState.checkedList}
        onChange={handleGroupChange}
      />
    </div>
  );
};

export default CheckboxDemo5;