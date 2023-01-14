import React,{memo} from 'react'

function Children() {
    console.log("Children")
  return (
    <div>Children Component</div>
  )
}
export default memo(Children)