import React from "react";
import './card.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { yellow } from '@mui/material/colors';


function Card(Props){
        return (
            
            <div className="AA">
            <div className="card" style={{ width: '9rem',height:"230px"}}>
              <img style={{height:"100px"}} src={Props.imagesrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title"><b>$</b>{Props.price}<br/>
                < StarIcon fontSize="small" sx={{ color: yellow[500] }}/> 
                <StarIcon sx={{ color: yellow[500] }} fontSize="small" /> 
                <StarIcon fontSize="small" sx={{ color: yellow[500] }}/>
                <StarIcon fontSize="small" sx={{ color: yellow[500] }}/> 
                <StarHalfIcon fontSize="small" sx={{ color: yellow[500] }} /></p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          
        )
    }


export default Card