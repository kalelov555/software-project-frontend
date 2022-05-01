import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RecordsTable = ({ recordsData, range }: { recordsData: any; range: any }) => {
  console.log("range", range)
  const dates = recordsData.data;

  function createData(
    id: number,
    date: Date,
    entryTime: Date,
    departureTime: Date
  ) {
    return { id, date, entryTime, departureTime };
  }
  const rows: any[] = [];
  dates.map((date: any, i: number) => {
    const d = new Date(`${date.attributes.date}`);
    console.log("h",d.getUTCHours()); // Hours
    console.log(d.getUTCMinutes());
    console.log(d.getUTCSeconds());
    rows.push(createData(i, date.attributes.date, date.attributes.entry_time, date.attributes.departure_time));
  })

  return <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ border: "1px solid" }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Entry time</TableCell>
            <TableCell align="right">departure_time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.entryTime}</TableCell>
              <TableCell align="right">{row.departureTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default RecordsTable;
