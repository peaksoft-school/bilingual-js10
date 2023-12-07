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
import { useSelector } from 'react-redux'

export const Table = ({ data, columns, columnGap, rowGap }) => {
   const { questions } = useSelector((state) => state.questionSlice)
   return (
      <Container>
         <TableContainerStyled component={Paper}>
            <MuiTableStyled>
               <TableHead>
                  <TableRowColumns columnGap={columnGap}>
                     {questions.length === 0 && data.length === 0 ? (
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
                        data.map((row, i) => (
                           <TableRowData rowGap={rowGap} key={row.id}>
                              {i + 1}
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
                                       {column.id !== 'dateOfSubmission' &&
                                          (row[column.id]?.length > 10
                                             ? `${row[column.id].substring(
                                                  0,
                                                  10
                                               )}...`
                                             : row[column.id])}
                                       {column.id === 'dateOfSubmission' && (
                                          <div>
                                             <p>
                                                {
                                                   row[column.id]
                                                      ?.hoursAndMinutes
                                                }
                                             </p>
                                             <p>
                                                {
                                                   row[column.id]
                                                      ?.dayMonthAndYear
                                                }
                                             </p>
                                          </div>
                                       )}
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
   },
}))
const MainContainerStyled = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   margin-right: 2rem;
   && .css-txc5l5-MuiTableCell-root {
      border: none;
      padding: 0;
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
const TableRowColumns = styled(TableRow)((props) => ({
   width: '100%',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   columnGap: props.columnGap || '60px',
}))
const TableRowData = styled(TableRow)((props) => ({
   boxShadow:
      ' 0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06);',
   borderRadius: '0.5rem',
   width: '58vw',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   gap: props.rowGap || '2rem',
   marginLeft: '1rem',
   marginBottom: '1rem',
}))
