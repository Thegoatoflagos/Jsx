import React from "react";
import { product } from "../product";

const Image = () => {
    return (
        <div>
            <img src={product.imagePath} alt="Headphone"></img>
        </div>
    );
};

export default Image;