import React from 'react';
import StarRating from './StarRating'


function ProductDetail(props) {
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.product.imgUrl} alt="" />
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews}</p>
                    <StarRating rating={props.product.rating} />



                </div>
            </div>
        </div>
    );
}

export default ProductDetail;