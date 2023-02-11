import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from "uuid"
import { useState } from 'react';
import {   todoReamaingSelector } from '../../redux/selelctor';
export default function TodoList() {
  const dispatch=useDispatch()
  const todoData=useSelector(todoReamaingSelector)
 
 
  // lay thong tin 
  const [todoName, setTodoName]= useState("")
  const [priority,setPriority]=useState("Medium")

  const handleInputChange=(e)=>{
setTodoName(e.target.value)
  }
  const handleChangePriority=(value)=>{
    
    setPriority(value)
  }
  const handleAddButtonClick=()=>{
//dispatch
    dispatch(addTodo({
      id:uuidv4(),
      name:todoName,
      completed:false,
      priority:priority

    }))
    setTodoName("")
    setPriority("Medium")
  }
 
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoData.map(item =>
        <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed={item.completed} />
        )}
 
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
