import React from 'react'
import axios from 'axios';
import ExerciseData from './ExerciseData';
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
  } from "react-router-dom";
  import { useEffect } from "react";

const Api = () => {
    const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

 

// const func = ()=>{
//     axios.get('https://sheetdb.io/api/v1/83l3h6cjn8gct').then(
//         (response)=>{
//             console.log(response.data[0].Predicted_Calories_Burned);
//         }
//     )
// }




useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {

    let title = "";
    let metaDescription = "";

   

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <>
      <Routes>
      <Route path="/" element={<ExerciseData/>} />
    </Routes>
    </>
  )
}

export default Api