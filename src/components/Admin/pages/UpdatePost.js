import React, {useReducer} from "react";
import { useParams } from "react-router-dom";

import "./addpost.scss";

const DUMMY_POSTS = [
  {
    id: 1,
    title:
      "Welcome to our blog post. Welcome to our blog post.Welcome to our blog post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: "p1",
    category: "english",
  },
  {
    id: 2,
    title: "Welcome to our blog post,",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: "p2",
    category: "english",
  },
  {
    id: 3,
    title: "Welcome to 3 post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: "p3",
    category: "english",
  },
  {
    _id: 4,
    title: "Welcome to our 4. blog post,",
    description:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: "",
    content:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.4",
    time: "27 MAY 2020",
    postId: "p4",
    category:[
      {id:"1", name: "russian" },
      {id:"2", name: "english" },
      {id:"3", name: "ielts" },
      {id:"4", name: "sat" },
    ]
  },
];
const DUMMY_CATEGORIES = [
  { id: "1", name: "english" },
  { id: "2", name: "russian" },
  { id: "3", name: "ielts" },
  { id: "4", name: "sat" },
];

const UpdatePost = () => {
  const postId = useParams().pid;
  const loadedPosts = DUMMY_POSTS.find((p) => p.id === postId);
  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
  }

  const [state, dispatch] = useReducer(reducer, loadedPosts);
  let { title, description, image, content, category } = state;

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
  };


  if (!loadedPosts) {
    return (
      <div className='center'>
        <h2>Could not be loaded post</h2>
      </div>
    );
  }

  return <div className='addpost'>
      <form
        className='form-field'
        onSubmit={handleSubmit}
        encType='multipart/form-data'>
        <h1>Update Post</h1>
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
          {DUMMY_CATEGORIES.map((c) => (
            <option value={c.name} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
};

export default UpdatePost;
