import React from 'react'
import {
   Table as MuiTable,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   styled,
} from '@mui/material'

export const Table = ({ data, columns }) => {
   return (
      <Container>
         <TableContainerStyled component={Paper}>
            <MuiTableStyled>
               <TableHead>
                  <TableRowColumns>
                     {questions.length === 0 ? (
                        <p>There s no one here yet</p>
                     ) : (
                        columns?.map((column) => (
                           <TableCell key={column.id}>{column.label}</TableCell>
                        ))
                     )}
                  </TableRowColumns>
               </TableHead>
               <TableBodyStyled>
                  <MainContainerStyled>
                     {Array.isArray(data) &&
                        data.map((row) => (
                           <TableRowData key={row.id}>
                              {columns?.map((column) => {
                                 if (column.render) {
                                    return column.render(row)
                                 }
                                 return (
                                    <TableCell
                                       key={column.id}
                                       title={String(row[column.id])}
                                       className="tableCell"
                                    >
                                       {row[column.id]?.length > 10
                                          ? `${row[column.id].substring(
                                               0,
                                               10
                                            )}...`
                                          : row[column.id]}
                                    </TableCell>
                                 )
                              })}
                           </TableRowData>
                        ))}
                  </MainContainerStyled>
               </TableBodyStyled>
            </MuiTableStyled>
         </TableContainerStyled>
      </Container>
   )
}
const Container = styled('div')`
   border: none;
   box-shadow: none;
   .css-ly6ca0-MuiTableCell-root {
      border-bottom: none;
      font-size: none;
   }
   padding: 0;
   margin: 0;
`
const TableBodyStyled = styled(TableBody)(() => ({
   '&& .css-ecxqme-MuiTableRow-root': {
      borderBottom: '0.1px solid grey',
      // boxShadow: 'none',
   },
}))
const MainContainerStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   gap: 1rem;
   && .css-txc5l5-MuiTableCell-root {
      border: none;
   }
`
const TableContainerStyled = styled(TableContainer)(() => ({
   marginBottom: 'none',
   boxShadow: 'none',
   '&.css-lhr19p-MuiTable-root': {
      border: 'none',
      boxShadow: 'none',
   },
}))
const MuiTableStyled = styled(MuiTable)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   flexDirection: 'column',
}))
const TableRowColumns = styled(TableRow)(() => ({
   width: '62rem',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   columnGap: '60px',
}))
const TableRowData = styled(TableRow)(() => ({
   boxShadow:
      '0px 4px 10px 0px rgba(0, 0, 0, 0.06),0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
   borderRadius: '0.5rem',
   width: '62rem',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   columnGap: '60px',
}))
