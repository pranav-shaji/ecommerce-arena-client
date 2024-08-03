import React from 'react'

function AddProduct() {
    return (
        <div>
            <label>Product Name</label>
            <input type='text' />
            <label>Category Name</label>
            <input type='text' />
            <label>Brand</label>
            <input type='text' />
            <label>Price</label>
            <input type='text' />
            <label>Description</label>
            <input type='text' />
            <label>Offer Price</label>
            <input type='number' />
            <label>Upload Image</label>
            <input type='file' />
        </div>
    )
}

export default AddProduct