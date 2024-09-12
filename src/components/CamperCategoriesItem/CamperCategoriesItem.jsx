import css from './CamperCategoriesItem.module.css'

export default function CamperCategoriesItem(icon, title){
    const updatedTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

    return(
<div>
    <icon size={20} />
    <p className={css.text}>{updatedTitle}</p>
</div>
    );
}