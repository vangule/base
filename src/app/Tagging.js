import React, { useState } from 'react'
import Dropdown from './common/Dropdown'
import Tags from './Tags'

const Tagging = ({ selectTags = [], selectedTags }) => {
    const [newTags, setNewTags] = useState(selectedTags);
    
  return (
    <>
    <div class="w-1/5">
        <Dropdown data={selectTags} newTags={newTags} setNewTags={setNewTags} />
    </div>

    <Tags newTags={newTags} setNewTags={setNewTags} /></>
  )
}

export default Tagging