// import React from 'react'
// // import { Table } from './components/components/table/Table'
// import { Check, Eye, TrashCan } from './assets'
// import { styled } from '@mui/material'

// const data = [
//    {
//       id: 1,
//       name: 'Kubanov Farid ',
//       date: '2034-12-12',
//       test: 'Test number 1',
//       status: 'false',
//       score: 'false',
//    },
//    {
//       id: 2,
//       name: 'Azatov Ulan ',
//       date: '2034-12-12',
//       test: 'Test number 2',
//       status: 'false',
//       score: 'false',
//    },
//    {
//       id: 3,
//       name: 'Maratova Aijan ',
//       date: '2034-12-12',
//       test: 'Test number 1',
//       status: 'true',
//       score: 'true',
//    },
//    {
//       id: 4,
//       name: 'Bekova Aliza',
//       date: '2034-12-12',
//       test: 'Test number 3 ',
//       status: 'true',
//       score: 'true',
//    },
// ]

// const columns = [
//    { id: 'id', label: '#' },
//    { id: 'name', label: 'User Name' },
//    { id: 'date', label: 'Date of submissions' },
//    { id: 'test', label: 'Test' },
//    {
//       id: 'status',
//       label: 'Status',
//       render: (row) => {
//          const statusText = row.status === 'true' ? 'true' : 'false'
//          const color = row.status === 'true' ? 'green' : 'red'

//          return <p style={{ color }}>{statusText}</p>
//       },
//    },
//    {
//       id: '2',
//       label: 'Score',
//       render: (row) => {
//          const scoreText = row.score === 'true' ? 'true' : 'false'
//          const color = row.score === 'true' ? 'green' : 'red'

//          return <p style={{ color }}>{scoreText}</p>
//       },
//    },
//    {
//       id: 'status',
//       label: 'Status',
//       render: (row) => {
//          return (
//             <Container>
//                {row.status === 'true' ? <Eye /> : <Check />}
//                <TrashCan />
//             </Container>
//          )
//       },
//    },
// ]

// // return (
// // <div>
// //    <Table data={data} columns={columns} />
// // </div>
// // )

// // const Container = styled('div')`
// //    display: flex;
// //    gap: 0.7rem;
// // `
