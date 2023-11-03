import React from 'react'
import Markdown from 'react-markdown'

function Content() {
    const markdown =  '# Hi, *Pluto*!'
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}

export default Content
