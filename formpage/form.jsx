import React from 'react'
import Text from './formComponents/text'
import Photo from './formComponents/photo'
import Number from './formComponents/number'
import Select from './formComponents/select'

const Form = ({question}) => {
    if(question.type === 'TEXT'){
        return <Text question={question}/>
    }

    if(question.type === 'PHOTO'){
        return <Photo question={question}/>
    }

    if(question.type === 'NUMBER'){
        return <Number question={question}/>
    }

    if(question.type === 'SELECT'){
        return <Select question={question}/>

    }

    return (
    <div>
      No component found for this
    </div>
  )
}

export default Form
