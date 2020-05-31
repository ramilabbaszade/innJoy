import React, { useState } from 'react'
import axios from 'axios'

const AddCategory = () => {
    const [category, setCategory] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        // axios.post('http://127.0.0.1:5000/categories', { name: value })

        axios.post("http://127.0.0.1:5000/category/new", category)
            .then(res => console.log(res))
            .catch(err => console.log(`${err}`))
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
