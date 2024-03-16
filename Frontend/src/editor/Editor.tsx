import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { langs } from '@uiw/codemirror-extensions-langs';
import {codeState} from '@/../atom/CodeAtom'
import {useRecoilState} from 'recoil'
export default function Editor() {
  
    const [code, setCode] = useRecoilState(codeState);
  const onChange = React.useCallback((val:string, viewUpdate:any) => {
    setCode(val);
    
  }, []);


  return <CodeMirror theme={vscodeDarkInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  })} value={code} 
  basicSetup={{
    autocompletion:true,
    closeBrackets:true,
    highlightActiveLine:true
  }}
  extensions={[langs.cpp()]}
  height='80vh'
   onChange={onChange} />;

    
}
