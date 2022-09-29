import ImageCard from './ImageCard';

import IMAGES_DATA from 'data/ImagesData';

import './Image.css';

const ImagesList=()=>{
    return (
		<div className="image-grid">
            {IMAGES_DATA.map(image=>(
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
}

export default ImagesList;