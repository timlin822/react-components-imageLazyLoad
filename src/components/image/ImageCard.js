import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Image.css';

const ImageCard=({image})=>{
    return (
		<div className="image-card">
			<LazyLoadImage src={image.url} effect="blur" />
		</div>
    );
}

export default ImageCard;