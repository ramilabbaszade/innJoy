import React, { useReducer } from "react";
import axios from 'axios'
import "./addpost.scss";

const initialState = {
  title: "",
  description: "",
  image: "",
  content: "",
  category:[
    {id:"1", name: "russian" },
    {id:"2", name: "english" },
    {id:"3", name: "ielts" },
    {id:"4", name: "sat" },
  ]
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const AddPost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
      file: e.target.files,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    axios.post("http://127.0.0.1:5000/test", state)
    .then(res => console.log(res))
    .catch(err => console.log(`${err}`))
  };
  let { title, description, image, content, category } = state;

  return (
    <div className='addpost'>
      <form
        className='form-field'
        onSubmit={handleSubmit}
        encType='multipart/form-data'>
        <h1>Add Post</h1>
        <label htmlFor="title">Title *</label>
        <input
          name='title'
          value={title}
          onChange={handleChange}
          placeholder='Title'
          type='text'
          required
        />
        <label htmlFor="description">Description *</label>
        <input
          name='description'
          value={description}
          onChange={handleChange}
          cols='20'
          rows='4'
          placeholder='Type content of post'
        />
        <label htmlFor="image">Image *</label>
        <input name='image' file={image} onChange={handleChange} type='file' />
        <textarea
          name='content'
          value={content}
          onChange={handleChange}
          cols='30'
          rows='5'></textarea>
        <select
          name='categories'
          value={category[0].value}
          onChange={handleChange}>
          {state.category.map((c) => (
            <option value={c.name} key={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
