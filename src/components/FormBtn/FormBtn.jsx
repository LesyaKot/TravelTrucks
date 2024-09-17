import { Children } from 'react'
import css from './FormBtn.module.css'

export default function FormBtn({children}){
    return (
        <div>
            <button type="submit">{children}</button>
        </div>
    )
}