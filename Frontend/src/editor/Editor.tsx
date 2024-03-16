import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { langs } from '@uiw/codemirror-extensions-langs';

export default function Editor() {

    const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val:string, viewUpdate:any) => {
    console.log('val:', val);
    setValue(val);
  }, []);


  return <CodeMirror theme={vscodeDarkInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  })} value={value} 
  basicSetup={{
    autocompletion:true,
    closeBrackets:true,
    highlightActiveLine:true
  }}
  extensions={[langs.cpp()]}
  height='80vh'
   onChange={onChange} />;

    
}
