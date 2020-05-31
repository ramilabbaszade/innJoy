import React from 'react'

const SliderList = props => {
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
                {console.log(`Slider prop: ${props.slider}`)}
                {Object.values(props.slider).map((slide) => {
                    return <tbody key={slide._id}>
                        <tr>
                        {console.log(`Slide: ${slide.image}`)}
                            <td>{slide._id}</td>
                            <td>{slide.image}</td>
                            <td>
                                <button onClick={e => { console.log(`${slide._id} removed from list`) }} className='btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
    )
}

export default SliderList
