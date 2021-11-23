import { dataExample } from '../utils'
import { useSortableData } from './useSortableData'
import { useState } from 'react'
import Datatable from './Datatable'

const EmployeeList = () => {
  const [keyword, setKeyword] = useState('')

  const { items, requestSort, sortConfig } = useSortableData(dataExample)

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const search = rows => {
    return rows.filter(
      row =>
        row.firstName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
        row.lastName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    )
  }

  return (
    <main>
      <div>
        <h1>HRnet</h1>
        <div>
          <label htmlFor='keyword'>Recherche rapide</label>
          <input
            type='text'
            name='keyword'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort('firstName')}
              className={getClassNamesFor('firstName')}
            >
              Prénom
            </th>
            <th
              onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}
            >
              Nom
            </th>
            <th
              onClick={() => requestSort('birthDate')}
              className={getClassNamesFor('birthDate')}
            >
              Date d'arrivée
            </th>
            <th
              onClick={() => requestSort('startDate')}
              className={getClassNamesFor('startDate')}
            >
              Date de démarrage
            </th>
            <th
              onClick={() => requestSort('street')}
              className={getClassNamesFor('street')}
            >
              Adresse
            </th>
            <th
              onClick={() => requestSort('city')}
              className={getClassNamesFor('city')}
            >
              Ville
            </th>
            <th
              onClick={() => requestSort('usaState')}
              className={getClassNamesFor('usaState')}
            >
              État
            </th>
            <th
              onClick={() => requestSort('zipcode')}
              className={getClassNamesFor('zipcode')}
            >
              Code postale
            </th>
            <th
              onClick={() => requestSort('departmentState')}
              className={getClassNamesFor('departmentState')}
            >
              Secteur d'activité
            </th>
          </tr>
        </thead>
        <tbody>
          <Datatable items={search(items)} />
        </tbody>
      </table>
    </main>
  )
}

export default EmployeeList
