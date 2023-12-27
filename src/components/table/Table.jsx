import React from 'react'
import {
   Table as MuiTable,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   styled,
   TableBody,
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
            <MuiTable>
               <TableHeadStyle>
                  <TableRowColumns columnGap={columnGap}>
                     {questions?.length === 0 && data?.length === 0 ? (
                        <p>There s no one here yet</p>
                     ) : (
                        columns?.map((column) => (
                           <TableCell key={column.id}>{column.label}</TableCell>
                        ))
                     )}
                  </TableRowColumns>
               </TableHeadStyle>
               <TableBodyStyled>
                  {/* <MainContainerStyled> */}
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
                                       <div
                                          style={{
                                             height: '50px',
                                             marginTop: '-10px',
                                          }}
                                       >
                                          <p>
                                             {row[column.id]?.hoursAndMinutes}
                                          </p>
                                          <p>
                                             {row[column.id]?.dayMonthAndYear}
                                          </p>
                                       </div>
                                    )}
                                 </TableCell>
                              )
                           })}
                        </TableRowData>
                     ))}
                  {/* </MainContainerStyled> */}
               </TableBodyStyled>
            </MuiTable>
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
   '.MuiTableCell-root': {
      width: '17%',
      height: '100%',
      textAlign: 'start',
      border: 'none',
      marginTop: '14px',
   },
}))

const TableHeadStyle = styled(TableHead)(() => ({
   '.MuiTableCell-root ': {
      width: 'max-content',
      height: '41px',
      textAlign: 'start',
      fontSize: '0.8rem',
      color: '#222222',
      marginBottom: '1.25rem',
   },
}))

const TableContainerStyled = styled(TableContainer)(() => ({
   marginBottom: 'none',
   boxShadow: 'none',
   width: '55vw',
   '&.css-lhr19p-MuiTable-root': {
      border: 'none',
      boxShadow: 'none',
   },
}))
const TableRowColumns = styled(TableRow)((props) => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: props.columnGap,
}))
const TableRowData = styled(TableRow)((props) => ({
   boxShadow:
      ' 0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06);',
   borderRadius: '0.5rem',
   maxWidth: '100%',
   height: '4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: props.rowGap || '1rem',
   marginBottom: '1rem',
   padding: ' 0 1rem',
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
