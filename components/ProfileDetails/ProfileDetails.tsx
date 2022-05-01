import { Avatar, Typography, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const ProfileDetails =
  ({ id, username, email, full_name, description, phone, avatar }:
    { id: any; username: any; email: any; full_name: any; description: any; phone: any; avatar: any }) => {

    console.log(avatar);

    return <div>
      <Title level={1}>Home page</Title>
      <br></br>
      <Card
        style={{ width: 400 }}
        cover={
          <img style={{ height: 300 }}
            alt="example"
            src={`https://source.unsplash.com/random/300×300/?productivity`}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={full_name}
          description={description}
        />
        <br></br>

        <Card title="Details" bordered={true} style={{ width: 300 }}>
          <table style={{ width: "100%" }}>
            <tbody >
              <tr>
                <td style={{ padding: "3%" }}>
                  <Text>Email</Text>
                </td>
                <td style={{ padding: "3%" }}>
                  <Text>{email}</Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "3%" }}>
                  <Text>username</Text>
                </td>
                <td style={{ padding: "3%" }}>
                  <Text>{username}</Text>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "3%" }}>
                  <Text>Phone Number</Text>
                </td>
                <td style={{ padding: "3%" }}>
                  <Text>{phone}</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>


      </Card>

    </div >
  }


export default ProfileDetails;
