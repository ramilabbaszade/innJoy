import React from 'react'

const DUMMY_SLIDES = [
    { id: 1, image: "../../assets/img/fullscreen1.jpg" },
    { id: 2, image: "../../assets/img/edu.jpg" },
    { id: 3, image: "../../assets/img/fullscreen2.jpg" },
    { id: 4, image: "../../assets/img/fullscreen1.jpg" },
    { id: 5, image: "../../assets/img/fullscreen2.jpg" },
];

const SliderList = () => {
    return (
        <div>
            <h2>Slider Photos' List</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {DUMMY_SLIDES.map((s) => {
                        return <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.image}</td>
                            <td>
                                <button onClick={e => { console.log(`${s.id} removed from list`) }} className='btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SliderList
