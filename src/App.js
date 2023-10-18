import { BasicTable } from './components/ basicTable/BasicTable'

function App() {
   // const columns = [
   //    { fullName: }
   //    { age: }
   //    { fullName: }
   // ]
   const columns = ['#', 'User Name', 'Date of Submition']

   const rows = [
      {
         name: 'Kubanov Farid',
         dateHours: '08:15 20.11.2021',
         testName: 'Test number 1',
         statusText: 'Not evaluated',
         status: true,
         score: '0',
      },
      {
         name: 'Kubanov Farid',
         dateHours: '08:15 20.11.2021',
         testName: 'Test number 1',
         statusText: 'Not evaluated',
         status: true,
         score: '0',
      },
      {
         name: 'Kubanov Farid',
         dateHours: '08:15 20.11.2021',
         testName: 'Test number 1',
         statusText: 'Not evaluated',
         status: true,
         score: '0',
      },
   ]
   return (
      <div>
         {/* <h1>Bilingual js-10</h1> */}
         <BasicTable rows={rows} columns={columns} />
      </div>
   )
}

export default App
