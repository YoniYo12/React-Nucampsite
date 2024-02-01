import {Container , Col , Row} from 'reactstrap'
import CampsitesList from '../features/campsites/CampsitesList'
import CampsiteDetail from '../features/campsites/CampsiteDetail'

import { useState } from 'react';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';


const CampsitesDirectoryPage = ()=>{
    const [campsiteID,setCampsiteID] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteID)

     return(   
        <Container>
           
            
            <Row>
                <Col sm='5' md ='7'>
                    <CampsitesList setCampsiteID={setCampsiteID}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
     )
}


export default CampsitesDirectoryPage;