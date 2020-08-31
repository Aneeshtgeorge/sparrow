import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(ID, Name, Time) {
  return { ID, Name, Time};
}

const rows = [
  createData(1,'member 1', '1 hr'),
  createData(2,'member 2', '2 hr'),
  createData(3,'member 3', '3 hr'),
  createData(4,'member 4', '4 hr'),
  createData(5,'member 5', '5 hr'),
];

function SimpleTable (){
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
          <button type="button" onClick="DeleteRecord" class="btn btn-danger">Delete</button>
              <button type="button" onClick="EditRecord" class="btn btn-primary">Edit</button>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button type="button" onClick="EditRecord" class="btn btn-primary">Add</button>
      <form>
        <label>
          Name:
          <input type="text" value="fsd" />
        </label>
        <input type="submit" value="Submit" />
      
      </form>
      
    </TableContainer>
  );
  
}
export default SimpleTable