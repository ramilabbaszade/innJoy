import React, { useState } from "react";
import "./addpost.scss";

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='addpost'>
      <form
        className='form-field'
        onSubmit={handleSubmit}>
        <h1>Add Post</h1>
        <label htmlFor="title">Title *</label>
        <input
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          type='text'
          required
        />
        <label htmlFor="description">Description *</label>
        <input
          name='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
          cols='20'
          rows='4'
          placeholder='Type content of post'
        />
        <label htmlFor="image">Image *</label>
        <input name='image' file={image} onChange={e => setImage(e.target.files)} type='file' />
        <textarea
          name='content'
          value={content}
          onChange={e => setContent(e.target.value)}
          cols='30'
          rows='5'></textarea>
        <select
          name='categories'
          value={category.name}
          onChange={e => setCategory(category)}>
          {category.map((c) => (
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
