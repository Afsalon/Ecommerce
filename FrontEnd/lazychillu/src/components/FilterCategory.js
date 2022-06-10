import React from 'react'

const FilterCategory = () => {
  return (
    <div className="fiter">
      <input className="searchbar" type='search' placeholder="Search"/>
      <h5 className="Category">Category</h5>
      <div>
        <button className="filterbuttons" type="button">Sofa</button><br/>
        <button className="filterbuttons" type="button">Bed</button><br/>
        <button className="filterbuttons" type="button">Chair</button><br/>
        <button className="filterbuttons" type="button">Cabinet</button><br/>
        <button className="filterbuttons" type="button">Desk</button><br/>
        <button className="filterbuttons" type="button">Table</button><br/>
        <button className="filterbuttons" type="button">Set</button><br/>
      </div>
      <h5 className="Brand">Brand</h5>
      <select name="brand">
        <option value="">Black</option>
        <option value="">Contemporary</option>
        <option value="">Comfy Browns</option>
        <option value="">Lazy Cat</option>
      </select>
      <h5 className="Price">Price</h5>
      <input type="range" min="199" max="3999"/>
    </div>
  )
}

export default FilterCategory;
