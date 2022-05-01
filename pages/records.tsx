import axios from "axios";
import { Typography, DatePicker, Space } from "antd";
import { parseCookies } from "nookies";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/Navigationbar";
import moment from 'moment';
import RecordsTable from "../components/RecordsTable/RecordsTable";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { Title } = Typography;

const Records = ({ recordsData }: { recordsData: any }) => {
  const [range, setRange] = useState("");

  function onChange(dates: any, dateStrings: any) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    setRange(dateStrings);
  }


  return <div style={{ padding: "3% 0" }}>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="records-container" style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Title level={1}>Gate Records</Title>

        <Title level={5}>Choose Dates:</Title>
        <Space>
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={onChange}
          />
        </Space>
        <br></br><br></br><br></br>
        <RecordsTable recordsData={recordsData} range={range} />
        <br></br><br></br>

      </div>
      <div className="footer-container" style={{ width: "25%" }}>
        <NavigationBar />
      </div>
    </div>
    <Footer />
  </div>
}


export async function getServerSideProps(ctx: any) {
  const jwt = parseCookies(ctx).jwt;


  const res = await axios.get("http://localhost:1337/api/records", {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
  const recordsData = await res.data;

  console.log(recordsData);


  return {
    props: {
      recordsData
    }
  }
}

export default Records;
