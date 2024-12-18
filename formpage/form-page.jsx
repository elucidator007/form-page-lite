import React from 'react'
import Form from './form'
import { QUESTIONS } from '@/utility/constants'

const Formpage = () => {
  return (
    <div className='flex flex-col gap-5'>
        {QUESTIONS.map(question => {
            return <div key={question.id}>
                <Form question={question}/>
            </div>
        })}
    </div>
  )
}

export default Formpage
