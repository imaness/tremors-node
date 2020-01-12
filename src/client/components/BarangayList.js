import { get } from 'axios';
import React, { useState, useEffect } from 'react'


const BarangayList = () => {
  const [barangayList, setBarangayList] = useState([]);
  
  useEffect(() => {  
    get('http://localhost:8080/json/cityCoordsData.json')
      .then((res) => {
        setBarangayList(res.data);
      })

  });

  const listHtml = barangayList.map((barangay, index) => {
      return (<div key={index} id="west-fault-list" className="list-group">
        <a href="#" className="list-group-item">{barangay.PlaceName}<span className="population">{barangay.PopulationSize}</span></a>
      </div>);
    });
    
  return listHtml;
}


export default BarangayList;
