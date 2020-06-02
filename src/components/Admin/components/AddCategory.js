import React, { useState } from 'react'

const AddCategory = () => {
    const [category, setCategory] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="center">
            <form
                className='form-field'
                onSubmit={handleSubmit}>
                <h1>Add Category</h1>
                <label htmlFor="category">Category name: </label>
                <input
                    name='category'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
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
