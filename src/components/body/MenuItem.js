import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = props => {
  return (
    <div style={{width:"25%"}}>
        <Card inverse style={{ padding: 10, margin: 10, cursor:'pointer'}} onClick={props.DishSelect}>
          <CardImg
            alt={props.dish.name}
            src={baseUrl + props.dish.image}
            style={{
              height: 270,
              opacity: 0.5,
              objectFit: 'cover'
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5" style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
                {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </Card>
    </div>
  )
}

export default MenuItem;