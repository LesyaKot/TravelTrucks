import css from './CamperCategoriesItem.module.css'

export default function CamperCategoriesItem({ icon: Icon, title }) {
   
    const updatedTitle = typeof title === 'string' ? `${title.charAt(0).toUpperCase()}${title.slice(1)}` : '';
  
    return (
      <div className={css.wrap}>
        <Icon size={20} />
        <p className={css.text}>{updatedTitle}</p>
      </div>
    );
  }