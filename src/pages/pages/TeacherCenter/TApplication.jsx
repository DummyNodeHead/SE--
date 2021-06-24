import React, { Component } from 'react'
import { Input, Select, Form, Button } from 'antd'
import { Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'

const { Option } = Select;
const { TextArea } = Input;

export default class TApplication extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4, offset: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        return (
            <div>
                <br /><br />
                <span style={{ color: '#000', fontSize: '1.4em' }}>教 师 申 请 填 写</span>
                <br /><br /><br />
                <Form.Item {...formItemLayout} label="申请类型">
                    <Select defaultValue="changemajor">
                        <Option value="changemajor">转系</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="详细说明" {...formItemLayout}>
                    <TextArea showCount maxLength={500} autoSize={{ minRows: 6, maxRows: 6 }}></TextArea>
                </Form.Item>
                <Popconfirm
                    title="您确认申请内容无误吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary">提交申请</Button>
                </Popconfirm>
                <Link to="/TeacherCenter/MyApplication">
                    <Button type="primary" style={{ marginLeft: 20 }}>我的申请</Button>
                </Link>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}
