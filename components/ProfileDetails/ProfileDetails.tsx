import { Avatar, Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';


const ProfileDetails =
  ({ id, username, email, full_name, description, phone, avatar }:
    { id: any; username: any; email: any; full_name: any; description: any; phone: any; avatar: any }) => {

    console.log(avatar);

    return <div>
      <img src={`http://localhost:1337/uploads/${id}`}></img>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <table>
        <tbody>
          <tr>
            <td>
              <Text>Full Name</Text>
            </td>
            <td>
              <Text>{full_name}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Email</Text>
            </td>
            <td>
              <Text>{email}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>username</Text>
            </td>
            <td>
              <Text>{username}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Description</Text>
            </td>
            <td>
              <Text>{description}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Phone Number</Text>
            </td>
            <td>
              <Text>{phone}</Text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }


export default ProfileDetails;
