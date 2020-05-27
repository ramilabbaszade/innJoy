import React, { useState } from 'react'

const AddCategory = () => {
    const [category, setCategory] = useState('')
    const handleChange = e=>{
        e.preventDefault()
        setCategory(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(`${category} added to list`)
    }
    return (
        <div className="center">
            <form
                className='form-field'
                onSubmit={handleSubmit}
                encType='multipart/form-data'>
                <h1>Add Category</h1>
                <label htmlFor="title">Category name: </label>
                <input
                    name='category'
                    onChange={handleChange}
                    type="text"
                    required
                />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory
