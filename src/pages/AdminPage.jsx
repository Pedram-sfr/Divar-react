import React, { useEffect } from 'react'
import CategoryForm from 'components/templates/CategoryForm'
import CategoryList from 'components/templates/CategoryList'

function AdminPage() {
  useEffect(() => {
    document.title = "دیوار ادمین"
 }, []);
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  )
}

export default AdminPage