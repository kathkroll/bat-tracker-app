import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class BatList extends Component {
  
  render() {
    const { bats } = this.props;

    const batList = bats.map(function(bat) {
      return (
        <TableRow key={bat.id}>
          <TableCell>{bat.name}</TableCell>
          <TableCell>{bat.currentWeight}</TableCell>
          <TableCell>{bat.currentLocation}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      );
    });

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Location</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {batList}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}