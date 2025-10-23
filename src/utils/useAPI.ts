import {useEffect,useState} from 'react';

const useAPI = (API) =>{
  const [cardDetails,setCardDetails]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(API);
      const json=await data.json();
      setCardDetails(json.data)  ;
    }
    fetchData();
  },[]);
  return cardDetails;
}

export default useAPI;
