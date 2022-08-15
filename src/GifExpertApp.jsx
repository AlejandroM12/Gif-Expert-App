import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState('')

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories])
    }
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
    </>
  )
}
