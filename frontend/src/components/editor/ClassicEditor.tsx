import React, { FunctionComponent } from 'react';
// rich editor
import CKEditor from 'ckeditor4-react';
// custom
import './ck-editor.css';
import { removeHtmlTags, removeNewLines } from '../../common/util/HelperFunctions';

interface IClassicEditorProps {
    placeholder: string;
    onEditorChange: (text: string, html: string) => void;
}

const ClassicEditor: FunctionComponent<IClassicEditorProps> = (props): JSX.Element => {
    const { placeholder, onEditorChange } = props;
    // event handler
    const handleEditorChange = ( evt: any ) =>{
        const html: string =  evt.editor.getData();
        let text: string = removeHtmlTags(html);
        text = removeNewLines(text);
        onEditorChange(text, html);
    };

    return <React.Fragment>

        <CKEditor
            className="editor"
            type="classic"
            onChange={handleEditorChange}
            data={`<p>${placeholder}</p>`}/>

    </React.Fragment>
};

export default ClassicEditor;