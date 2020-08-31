import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class SimpleTable2 extends React.Component
{
    constructor (){
        super()
        this.state={
            id:"1",
            name:"menber1 ",
            time:" 1hr",

        }
        this.createData=this.createData.bind(this)
    }
    useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
    
      createData(ID, Name, Time) {
        return { ID, Name, Time};
      }
      
      rows = [
        createData(this.ID,this.Name,this.Hour),
        createData(2,'member 2', '2 hr'),
        createData(3,'member 3', '3 hr'),
        createData(4,'member 4', '4 hr'),
        createData(5,'member 5', '5 hr'),
      ];
}
export default SimpleTable2