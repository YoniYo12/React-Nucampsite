import { Container } from "reactstrap";
import DisplayList from "../components/DisplayList";
import SubHeader from "../components/SubHeader";
const HomePage = ()=>{
    return (
        <div>
            <Container>
                <SubHeader current = 'Home'/>
                <DisplayList />
            </Container>
        </div>
    )
    
}

export default HomePage;