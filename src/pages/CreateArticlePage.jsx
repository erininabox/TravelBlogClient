import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import axios from 'axios'

// import './styles.scss'

class MenuBar extends React.Component{
  render(props){
    if (!this.props.editor) {
      return null
    } else {
      return (
        <>
        </>
      )
    }
  }
} 

export default (props) => {
  const [articleContent, setArticleContent] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h2>
      Enter Title Here
      </h2>
      <p>
       Your Article:
      </p>
   
    `,
    onUpdate() {
      const html = this.getHTML()
      console.log('SILLY SILLY SILLY WORDS', html)
      setArticleContent(`${html}`)
    }
  })
  const submittingFunction = (event) =>{
    // const json = getJSON()
    event.preventDefault()
     console.log(articleContent)
     //do axios POST here

     const nostring = (articleContent)
//THIS IS WHERE THE ISSUE LIES WITH THE P TAGS AUTO GENERATING
     axios.post(`${process.env.REACT_APP_SERVER_URL}/api/cities/${props.match.params.id}`, {
       content:articleContent
     })
     .then((response)=>{
       console.log(response)
       setShouldRedirect(true)
     })
  }
  let jsx = ''
  if (shouldRedirect){
    return(
      <Redirect to={`/cities/${props.match.params.id}`}/>
    )
    
  } else{
    return (
      <div>
        <form onSubmit={submittingFunction}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor}/>
            <button type="submit" >SUBMIT</button>
        </form>
    </div>
    )

  }
}