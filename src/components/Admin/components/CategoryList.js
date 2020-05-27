import React from 'react'

const DUMMY_CATEGORIES = [
    { id: "1", name: "english" },
    { id: "2", name: "russian" },
    { id: "3", name: "ielts" },
    { id: "4", name: "sat" },
  ];

const CategoryList = () => {
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
                <tbody>
                    {DUMMY_CATEGORIES.map((c) => {
                        return <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>
                                <button onClick={e => { console.log(`${c.name} removed from list`) }} className='btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
