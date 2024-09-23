import { nanoid } from 'nanoid';
import ImageItem from '../ImageItem/ImageItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({gallery, onClick}){

    return(
        <div>
            <ul className={css.list}>
                {gallery.map((item) => (
                    <li className={css.item} key={nanoid()}>
                        <ImageItem image={item} onClick={onClick}/>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}