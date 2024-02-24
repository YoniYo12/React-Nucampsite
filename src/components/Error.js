import { Col } from "reactstrap";

const Error = ({errMsg})=>{

    return(
        <Col>
            <h3>{errMsg}</h3>
        </Col>
    )
}

export default Error;