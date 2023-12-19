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
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { answersSlice } from '../../store/checkTestSlices/answers-slice'

export const Table = ({ data, columns, columnGap, rowGap }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { pathname } = useLocation()

   const handleCheck = (id, questionType) => {
      dispatch(answersSlice.actions.addQuestionId(id))
      dispatch(answersSlice.actions.addQuestionType(questionType))
      navigate('/admin/results/checking-page')
   }

   const { questions } = useSelector((state) => state.questionSlice)
   return (
      <Container>
         <TableContainerStyled component={Paper}>
            <MuiTableStyled>
               <TableHead>
                  <TableRowColumns columnGap={columnGap}>
                     {questions?.length === 0 && data?.length === 0 ? (
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
                           <TableRowData
                              rowGap={rowGap}
                              pathname={pathname}
                              key={row.id}
                              onClick={() => {
                                 if (
                                    pathname === '/admin/results/user-responses'
                                 ) {
                                    handleCheck(row.id, row.questionType)
                                 }
                              }}
                           >
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
   width: '56.1vw',
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
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   columnGap: props.columnGap || '80px',
}))
const TableRowData = styled(TableRow)((props) => ({
   boxShadow:
      ' 0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06);',
   borderRadius: '0.5rem',
   width: '50vw',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   gap: props.rowGap || '1rem',
   marginBottom: '1rem',
   cursor: props.pathname === '/admin/user-responses' ? 'pointer' : 'auto',
   ':hover': {
      backgroundColor:
         props.pathname === '/admin/results/user-responses'
            ? '#f8f8f8'
            : 'white',
      boxShadow:
         ' 0px 1px 5px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06);',
      transitionDuration: '0.7s',
   },
}))
