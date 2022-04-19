/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import ReactJson from "react-json-view";
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const JsonConfig = {
  items: [
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    },
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    }
    
  ]
}
console.log(JsonConfig.items)

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const FinalForm = () => {

  const onEdit = e => {
    this.setState({ src: e.updated_src });
  };

  const onDelete = e => {
    this.setState({ src: e.updated_src });
  };
   
  return (
    <>
      
      <Form
        onSubmit={ onSubmit }
        initialValues={ JsonConfig.items }
        render={ ({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={ handleSubmit }>
            <div>
              <label>Image Url</label>
              <Field
                name="imageUrl"
                component="input"
                type="text"
                placeholder="imageUrl"
              />
            </div>
            
            <div className="buttons">
              <button type="submit" disabled={ submitting || pristine }>
                Submit
              </button>
              <button
                type="button"
                onClick={ form.reset }
                disabled={ submitting || pristine }
              >
                Reset
              </button>
            </div>
            <pre>{ JSON.stringify(values, 0, 2) }</pre>
          </form>
        ) }

      />
     
    </>
  )
}


export default FinalForm;