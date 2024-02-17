import {Col , Row} from 'reactstrap';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../Partners/partnersSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const DisplayList = ()=>{
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
    console.log('Display Items:',items)
    return(
        <Row>
            {
                items.map((item,idx)=> {
                    return(
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item = {item}/>
                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default DisplayList;
