import React from "react";
import { Link } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import SliderList from "../components/SliderList";

import "./admin.scss";

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
    id: 4,
    title: "Welcome to our 4. blog post,",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: "",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: "p4",
    category: "english",
  },
];

const Admin = () => {
  return (
    <div className='admin'>
      <div className="admin-header">
        <button className='btn-success'>
          <Link to='/post/new'>ADD POST </Link>
        </button>
        <button className='btn-danger'>
          <Link to='/category/new'>ADD CATEGORY</Link>
        </button>
        <button className='btn-blue'>
          <Link to='/slider/new'>ADD SLIDER</Link>
        </button>
      </div>
      <div className='posts-list-admin'>
        <h2>Posts List</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Time</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_POSTS.map((post) => {
              return (
                <tr key={post.id}>
                  <td> {post.id} </td>
                  <td> {post.title} </td>
                  <td> {post.time} </td>
                  <td>
                    <button className='btn-warning' value='EDIT'>
                      <Link to={`/post/${post.postId}`}>EDIT</Link>
                    </button>
                  </td>
                  <td>
                    <button onClick={e => { console.log(`${post.title} removed from list`) }} className='btn-danger'>DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='category-list-admin'>
        <CategoryList />
      </div>

      <div className='slider-list-admin'>
        <SliderList />
      </div>
    </div>
  );
};

export default Admin;
