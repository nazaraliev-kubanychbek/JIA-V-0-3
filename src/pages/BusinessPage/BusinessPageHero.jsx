import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const BusinessPageHero = () => {
  const [text, setText] = useState({});
  const lang = useSelector(s=> s.reducer.lang);

  useEffect(()=>{
    axios(`https://bif.webtm.ru/${lang}/api/v1/project/projects/`)
    .then(({data})=> setText(data[0]))
  }, [lang])
    return (
        <div className="businessPage-hero">
        <h1 className="businessPage-hero-title">{text.title}</h1>
        <p className="businessPage-hero-text">{text.descriptons}</p>
        </div>
    );
}

export default BusinessPageHero;
