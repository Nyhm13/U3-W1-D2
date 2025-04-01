import { Container } from "react-bootstrap"

const MyFooter=function(){
    return(
        <Container fluid={true} className="text-center fs-5 bg-primary p-3   fixed-bottom">
          <div>  Epicode - {new Date().getFullYear()} </div>
        </Container>
    )
}
export default MyFooter