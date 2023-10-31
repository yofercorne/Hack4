import { useEffect, useState } from "react"
import { fetchGroups } from "../../api/dataService"
import 'devextreme/data/odata/store';
import DataGrid, { Column, }  from 'devextreme-react/data-grid';

export default function Group() {
  const [groupsWithPersonCount, setGroupsWithPersonCount] = useState();


  useEffect(() => {
    fetchGroups()
    .then((response) => {
      const groupsData = response.data;

      console.log(groupsData);

      setGroupsWithPersonCount(groupsData.map(group => ({
        id: group.id,
        name: group.name,
        personCount: group.persons ? group.persons.length : 0    
      }))
      )

    }).catch((error) => {
      console.log(error);
    })
  },[]);


  return(
    <DataGrid
      dataSource={groupsWithPersonCount}
      showBorders={true}
      >
        <Column dataField="id" width={50} />
        <Column dataField="name" />
        <Column dataField="personCount" caption="Number of Persons" />
    </DataGrid>

  )
}
