import React from 'react'

const CategoryList = (props) => {
    return (
        <div>
            <h2>Category List</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Category Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {props.categories.map(category => {
                    // console.log(`Category: ${category}`)
                    return (<tbody key={category._id}>
                        <tr key={category._id}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                            <td>
                                <button onClick={e => { console.log(`${category.name} removed from list`) }} className='btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    </tbody>)
                })}
            </table>
        </div>
    )
}

export default CategoryList
