import React, { useEffect, useState } from "react";
import { fetchGroups } from "../../api/dataService";
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import './groups.scss';
export default function Group() {
  // Se declara un estado llamado 'groupsWithPersonCount' utilizando useState.
  const [groupsWithPersonCount, setGroupsWithPersonCount] = useState([]);

  // Utiliza useEffect para realizar la solicitud a la API cuando el componente se monta.
  useEffect(() => {
    fetchGroups()
      .then((response) => {
        // Extrae los datos de respuesta de la solicitud.
        const groupsData = response.data;

        // Registra los datos de grupos en la consola.
        console.log(groupsData);

        // Modifica el estado 'groupsWithPersonCount' transformando los datos de grupos.
        setGroupsWithPersonCount(groupsData.map(group => ({
          id: group.id,
          name: group.name,
          personCount: group.persons ? group.persons.length : 0    
        })))
      })
      .catch((error) => {
        console.error(error);
      })
  }, []); // El [] como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.


  const scoreCellRender = (data) => {
    const scoreValue = data.value; 
    
    let cellBackgroundColor = "white";

    if (scoreValue <= 10) {
      cellBackgroundColor = "lightgreen";
    } else if (scoreValue > 20) {
      cellBackgroundColor = "lightcoral";
    }

    return <div style={{ background: cellBackgroundColor }}>{scoreValue}</div>;
  };


  return (
    <DataGrid
    dataSource={groupsWithPersonCount}
    showBorders={true}
    className="custom-data-grid" // Agregar una clase personalizada al DataGrid
  >
    <Column dataField="id" width={150} alignment="center" cellRender={scoreCellRender} />
    <Column dataField="name" alignment="center" cellRender={scoreCellRender} />
    <Column dataField="personCount" caption="Number of Persons" alignment="center" cellRender={scoreCellRender} />
  </DataGrid>
  )
}
