import React from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'

const editorConfiguration = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      '|',
      'outdent',
      'indent',
      'alignment',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      '-',
      'textPartLanguage',
      '|',
      'subscript',
      'superscript',
      'strikethrough',
      '|',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'removeFormat',
      'specialCharacters',
      '|',
      'code',
      'codeBlock',
      '|',
      'highlight',
      '|',
      'horizontalLine',
      'imageInsert',
    ],
    shouldNotGroupWhenFull: true,
  },
  language: 'en',
  image: {
    toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage'],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties'],
  },
}

const Edit = ({ data, setData, disabled = false }) => {
  return (
    <div className='Editor' style={{ color: 'black' }}>
      <CKEditor
        editor={Editor}
        config={!disabled && editorConfiguration}
        disabled={disabled}
        Base64UploadAdapter
        data={data}
        onChange={(event, editor) => setData((s) => editor.getData())}
      />
    </div>
  )
}

export default Edit
