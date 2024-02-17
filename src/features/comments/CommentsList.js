import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./CommentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";



const CommentsList = ({campsiteId})=>{
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    if(comments && comments.length>0){
        return(
            <Col className="m-1" md = '5'>
                <h4>Comments</h4>
                {
                    comments.map((comment)=>{
                        return <Comment key = {comment.id} comment = {comment}/>                            
                    }
                    
                    )
                }
                <CommentForm campsiteId={campsiteId}/>
            </Col>
        );
    }
    return (
        <Col md='5' className="m-1">There are no comments for this campsite yet</Col>
    )


}

export default CommentsList;