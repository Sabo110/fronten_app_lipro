import React from 'react'
import Member from './Member'
import { getQuestionnaires } from '../user/User'
import { useQuery } from '@tanstack/react-query'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import ShowQuestionnaire from '../components/ShowQuestionnaire';
import { Link } from 'react-router-dom';
import DeleteQuestionnaire from '../components/DeleteQuestionnaire';

function Questionnaires() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['questionnaires'],
    queryFn: () => getQuestionnaires(),
  })
  const handleDelete = () => {
    refetch()
  }
  return (
    <Member>
      {data?.length == 0 && <p className="p-4">Vous n'avez aucun questionnaire <Link to="/member/" className="text-primary-500 ms-1 hover:text-black">cliquez ici pour créer en un</Link> </p> }
      <div className="p-4">
        {isPending && <div className="flex justify-center mb-3"><Spinner color="default"/></div>}
        <Table aria-label="Example static collection table" isStriped>
          <TableHeader>
            <TableColumn>TITRE</TableColumn>
            <TableColumn>DATE DE CREATION</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {data ?
              data.map((questionnaire) => (
                <TableRow key={questionnaire.id}>
                  <TableCell> {questionnaire.titled} </TableCell>
                  <TableCell> {questionnaire.created_at} </TableCell>
                  <TableCell className='flex gap-6'>
                    <ShowQuestionnaire questionnaire={questionnaire}/>
                    <DeleteQuestionnaire questionnaire={questionnaire} handleDelete={handleDelete}/>
                  </TableCell>
                </TableRow>
              ))

              : ''
            }

          </TableBody>
        </Table>
      </div>
    </Member>
  )
}



export default Questionnaires