import { Table, Tag, Space, Typography } from 'antd';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/Navigationbar';

const { Title } = Typography;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 8 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Assel Zholdasbekova',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Sagynzhan Kalel',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Sanzhae Baratov',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['backender'],
  },
];

const Employees = () => {
  // return <div style={{display: "flex", flexDirection: "row"}}>
  return <div>
    <div style={{ display: 'flex', justifyContent: "space-between", padding: "5% 3%" }}>
      <div style={{ width: "65%" }}>
        <Title level={1}>Employees List</Title>
        <br></br>
        <Table columns={columns} dataSource={data} />
      </div>
      <div style={{ width: "25%" }}>
        <NavigationBar />
      </div>
    </div>
    <Footer />
  </div>
}

export default Employees;
