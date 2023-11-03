import React from 'react'
import Markdown from 'react-markdown'
import { useData } from '../../context/DataContext'

function Content() {
    const {theme} = useData()
    const markdown =  '# Hi, *Pluto*!'
  return (
    <div className={`${theme ? "bg-black-900" : "bg-white"} w-full h-full`}>
      <Markdown className="w-full min-h-screen">{markdown}</Markdown>
    </div>
  )
}

export default Content
