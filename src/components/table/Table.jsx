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
         <TableContainer component={Paper}>
            <MuiTableStyled>
               <TableHead>
                  <TableRowColumns>
                     {columns?.map((column) => (
                        <TableCell key={column.id}>{column.label}</TableCell>
                     ))}
                  </TableRowColumns>
               </TableHead>
               <TableBody>
                  <MainContainerStyled>
                     {data?.map((row) => (
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
                                       ? `${row[column.id].substring(0, 10)}...`
                                       : row[column.id]}
                                 </TableCell>
                              )
                           })}
                        </TableRowData>
                     ))}
                  </MainContainerStyled>
               </TableBody>
            </MuiTableStyled>
         </TableContainer>
      </Container>
   )
}

const Container = styled('div')`
   .css-ly6ca0-MuiTableCell-root {
      border-bottom: none;
      font-size: none;
   }
   padding: 0;
   margin: 0;
`

const MainContainerStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   gap: 1rem;
   .css-txc5l5-MuiTableCell-root {
      border-bottom: none;
   }
`
const MuiTableStyled = styled(MuiTable)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start',
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
