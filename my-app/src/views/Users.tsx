import React from 'react';
import posts from '../data/posts.json'
import { Card } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    table: {
      minWidth: '650px',
      border: '1px solid',
      maxWidth: '50%',
      margin: 'auto',
      
    },
    cell: {
      border: '1px solid',
      fontWeight: 'bold'
    },
    secondcell: {
      border: '1px solid',
    }
  });

const Users = () => {
    const classes = useStyles();
    return (
        <div>
        <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.cell}>
              <TableCell className={classes.cell} > userID</TableCell>
              <TableCell className={classes.cell} align="right"> id</TableCell>
              <TableCell className={classes.cell} align="right"> body</TableCell>
              <TableCell className={classes.cell} align="right"> title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map(posts => (
              <TableRow  key={posts.id}>
                <TableCell className={classes.secondcell}>
                {posts.userId}
                </TableCell>
                <TableCell className={classes.secondcell} align="right"> {posts.id}</TableCell>
                <TableCell className={classes.secondcell} align="right"> {posts.body}</TableCell>
                <TableCell className={classes.secondcell} align="right"> {posts.title}</TableCell>


              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
};
export default Users;