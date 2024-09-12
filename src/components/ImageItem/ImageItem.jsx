import css from './ImageItem.module.css';

export default function ImageItem({image, onClick}){
    return(
        <>
        <img className={css.image} src={image.original} alt={"camper photo"} width="292" height="320" onClick={() => onClick(image.original)}></img>
        </>
    )
}