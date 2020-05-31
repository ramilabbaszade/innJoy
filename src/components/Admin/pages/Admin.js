import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import CategoryList from "../components/CategoryList";

import "./admin.scss";

const Admin = props => {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/admin")
      .then(res => {return (setPosts(res.data.posts),setCategories(res.data.categories))})
      .catch(error => console.log(error))
  }, [])
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
          {posts.map((post) => {
            return ( <tbody key={post._id}>
                <tr key={post._id}>
                <td> {post._id} </td>
                <td> {post.title} </td>
                <td> {post.time} </td>
                <td>
                  <button className='btn-warning' value='EDIT'>
                    <Link to={`/post/${post._id}`}>EDIT</Link>
                  </button>
                </td>
                <td>
                  <button onClick={e => { console.log(`${post.title} removed from list`) }} className='btn-danger'>DELETE</button>
                </td>
              </tr>
          </tbody>)
          })}
        </table>
      </div>

      <div className='category-list-admin'>
        <CategoryList categories={categories} />
      </div>

      <div className='slider-list-admin'>
        {/* <SliderList  /> */}
      </div>
    </div>
  );
};

export default Admin;
