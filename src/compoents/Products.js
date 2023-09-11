import React from 'react'

const Products = ({ name, imagePath ,updateItemCount }) => {
    // console.log(name)
    // console.log(imagePath)

    const handelChange = (event)=>{
        const currentValue =event.target.vaule
        updateItemCount(name, currentValue)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <img style={{ width: "75%" }}
                src={`http://localhost:4000/${imagePath}`}
                alt={`${name} product`}></img>

            <form style={{ marginTop: "10px" }}>
                <label style={{ textAlign: 'right' }}>{name}</label>
                <input
                    style={{ marginLeft: "7px" }}
                    type="number"
                    name='quantity'
                    min="0"
                    defaultValue="0"
                    onChange={handelChange} />
            </form>
        </div>
    )
}

export default Products