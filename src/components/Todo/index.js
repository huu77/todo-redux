import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import {useDispatch } from 'react-redux'
import { checkedChange } from '../../redux/actions';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, prioriry,completed }) {
  const [checked, setChecked] = useState(completed);
  const dispacth=useDispatch()
 

  const toggleCheckbox = () => {
    setChecked(!checked);
    console.log(id,name, prioriry,checked)
  dispacth(checkedChange(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}  >
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
