import { nanoid } from 'nanoid';
import ImageItem from '../ImageItem/ImageItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({gallery, onClick}){

    return(
        <div>
            <ul>
                {gallery.map((item) => (
                    <li key={nanoid()}>
                        <ImageItem image={item} onClick={onClick}/>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}