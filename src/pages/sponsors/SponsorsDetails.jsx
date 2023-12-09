import {  useLoaderData, useParams } from "react-router-dom";
// import { BsArrowLeft } from 'react-icons/bs';
const SponsorsDetails = () => {
    const loadearData = useLoaderData()
    const {spon_id} = useParams();
    const idInt = parseInt(spon_id)
    const data = loadearData.find(data=> data.spon_id === idInt)
    console.log()
    return (
              <div>
                <h1>{spon_id}</h1>
              </div>
    );
};

export default SponsorsDetails;