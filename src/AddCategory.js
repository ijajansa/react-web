import React from 'react'

const AddCategory = () => {
  return (
    <div class="form-container">
    <form id="category-form">
        <label for="category-name">Category</label>
        <br />
        <br />
        <input type="text" id="category-name" name="category-name" placeholder='Category Name'required/>
        <br />
        <br />
        <button type="submit" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'purple', color: 'white' }}>
              Create
            </button>
    </form>
</div>
  )
}

export default AddCategory