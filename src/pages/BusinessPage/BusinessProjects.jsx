
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BusinessProjects = () => {
    const [projectList, setProjectList] = useState([]);
    const lang = useSelector(s=> s.reducer.lang);

    useEffect(()=>{
        axios(`https://bif.webtm.ru/${lang}/api/v1/project/yearly-catalogs/`)
        .then(({data}) => setProjectList(data));
    }, [lang])
    return (
        <div className="businessPage-projects">
            <div className="businessPage-projects-rightLine"></div>
        <div className="row">
                    {
                        projectList.map(item =>{
                            return <div key={item.id} className="col-4">
                                <div className="businessPage-projects-card">
                                    <p className="businessPage-projects-card-text">{item.year}</p>
                                    <img src={item.image} alt="" className="businessPage-projects-card-img" />
                                </div>
                            </div>
                        })
                    }
              </div>

        </div>
    );
}

export default BusinessProjects;
