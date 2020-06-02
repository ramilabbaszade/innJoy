import React from 'react'
import AddCategory from '../components/AddCategory'

import './categories.scss'


const DUMMY_CATEGORIES = [
    { id: "1", name: "english" },
    { id: "2", name: "russian" },
    { id: "3", name: "ielts" },
    { id: "4", name: "sat" },
  ];

const CategoryList = (props) => {

    return (
        <div className="categories">
            <div className="add-category">
                <AddCategory />
            </div>
            <div className="categories-table">
                <h2>Category List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Category Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {DUMMY_CATEGORIES.map(category => {
                        return (<tbody key={category.id}>
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <button onClick={() => console.log('Deleted succesfully')} className='btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        </tbody>)
                    })}
                </table>
            </div>
        </div>
    )
}

export default CategoryList
