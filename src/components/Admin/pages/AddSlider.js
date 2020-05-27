import React, {useState} from 'react'

const AddSlider = () => {
    const [slider, setSlider] = useState('')
    const handleImage = e =>{
        e.preventDefault()
        setSlider(e.target.files[0])
        console.log(e.target.files)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(`${slider} added successfully`)
    }
    return (
        <div className="center">
            <form
                className='form-field'
                onSubmit={handleSubmit}
                encType='multipart/form-data'>
                <h1>Add Slider Image</h1>
                <label htmlFor="title">Image *</label>
                <input
                    name='image'
                    onChange={handleImage}
                    type="file"
                    required
                />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddSlider
