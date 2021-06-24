import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'

export default class ManagerInfo extends Component {
  render() {
    return (
      <div>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <br /><br />
        <Link to="/ManagerCenter/ChangeAdmInfo">
          <Button>
            编辑信息
          </Button>
        </Link>

        <Link to="/ManagerCenter/AdmChangePSW">
          <Button style={{ marginLeft: 20 }}>
            修改密码
          </Button>
        </Link>
        <br /><br />
        <Descriptions title="管理员信息">
          <Descriptions.Item label="姓名">李四</Descriptions.Item>
          <Descriptions.Item label="工号">Txxxxxxxx</Descriptions.Item>
          <Descriptions.Item label="身份证号">123456789XXXXX</Descriptions.Item>
          <Descriptions.Item label="系/部门">计算机</Descriptions.Item>
        </Descriptions>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
