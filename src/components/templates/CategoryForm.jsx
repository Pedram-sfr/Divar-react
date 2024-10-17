import { useState } from 'react'
import styles from './CategoryForm.module.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCategory } from 'src/services/admin'

function CategoryForm() {
    const querClient = useQueryClient()
    const [form,setForm] = useState({name: "", slug: "", icon: ""})
    const {mutate, isPending, error, data} = useMutation({mutationFn: addCategory,onSuccess: () => querClient.invalidateQueries("get-categories")})
    const changHanddler = event => {
        setForm({...form,[event.target.name]: event.target.value})
    } 
    const submitHandler = event => {
        event.preventDefault()
        if(!form.name || !form.slug || !form.icon) return
        mutate(form)
    }
  return (
    <form onChange={changHanddler} onSubmit={submitHandler} className={styles.form}>
        <h3>دسته بندی جدید</h3>
        {!!error && <p className={styles.error}>{error.message}</p>}
        {data?.status === 201 && <p className={styles.success}>دسته بندی با موفقیت افزوده شد</p>}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name='name' id='name' />
        <label htmlFor="slug">اسلاگ</label>
        <input type="text" name='slug' id='slug' />
        <label htmlFor="icon">آیکون</label>
        <input type="text" name='icon' id='icon' />
        <button type='submit' disabled={isPending}>ایجاد</button>
    </form>
  )
}

export default CategoryForm