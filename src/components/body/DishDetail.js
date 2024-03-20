import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const DishDetail = props => {
  return (
    <div>
        <Card className="my-2">
            <CardImg
              alt={props.dish.name}
              src={baseUrl + props.dish.image}
              style={{
                // height: 180
                height: '100%'
              }}
              top
              width="100%"
            />
            <CardBody style={{ textAlign: 'left' }}>
              <CardTitle tag="h5">
                {props.dish.name}
              </CardTitle>
              <CardText>
                {props.dish.description}
              </CardText>
              <CardText tag="h6">
                Price: {props.dish.price} Taka
              </CardText>
              <hr />
              <LoadComments comments={props.comments} commentsIsLoading={props.commentsIsLoading}/>
              <hr />
              <CommentForm dishId={props.dish.id} addComment={props.addComment} />
            </CardBody>
        </Card>
    </div>
  )
}

export default DishDetail;