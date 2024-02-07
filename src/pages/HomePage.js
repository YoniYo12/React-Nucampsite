import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
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