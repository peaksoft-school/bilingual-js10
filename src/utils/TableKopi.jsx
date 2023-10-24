import { Table } from './Table'
import { Check, Eye, TrashCan } from './assets'

   const data = [
      {
         id: 1,
         name: 'Kubanov Farid ',
         date: '2034-12-12',
         test: 'Test number 1',
         status: 'true',
         score: 'false',
      },
      {
         id: 2,
         name: 'Azatov Ulan ',
         date: '2034-12-12',
         test: 'Test number 2',
         status: 'true',
         score: 'false',
      },
      {
         id: 3,
         name: 'Maratova Aijan ',
         date: '2034-12-12',
         test: 'Test number 1',
         status: 'true',
         score: 'true',
      },
      {
         id: 4,
         name: 'Bekova Aliza',
         date: '2034-12-12',
         test: 'Test number 3 ',
         status: 'true',
         score: 'true',
      },
   ]
   const columns = [
      { id: 'id', label: '#' },
      { id: 'name', label: 'User Name' },
      { id: 'date', label: 'Date of submitions' },
      { id: 'test', label: 'Test' },
      { id: 'status', label: 'Status' },
      {
         id: '2',
         label: 'Score',
         render: (row) => {
            return <p>{row.score}</p>
         },
      },
      {
         id: '3',
         label: '',
         render: () => {
            return (
               <div>
                  <Check />
                  <Eye />
                  <TrashCan />
               </div>
            )
         },
      },
   ]
   return (
      <div>
         <Table data={data} columns={columns} />
      </div>
   )
}

