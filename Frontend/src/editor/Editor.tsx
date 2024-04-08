import React, { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { langs } from '@uiw/codemirror-extensions-langs';
import { codeState } from '@/../atom/CodeAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';

export default function Editor() {
  const [codeVal, setCodeVal] = useRecoilState(codeState);

  const onChange = React.useCallback((val, viewUpdate) => {
    setCodeVal({
      ...codeVal,
      code: val
    });
  }, [codeVal, setCodeVal]);

  async function fetchDefaultCode() {
    try {
      const response = await axios.get('https://smartjudgequestions.s3.ap-south-1.amazonaws.com/TwoSum/Default.py');
      if (response.data) {
        setCodeVal({ ...codeVal, code: response.data });
      }
    } catch (error) {
      console.error('Error fetching default code:', error);
    }
  }

  useEffect(() => {
    fetchDefaultCode();
  }, []);

  return (
    <CodeMirror
      theme={vscodeDarkInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace'
        }
      })}
      value={codeVal.code}
      basicSetup={{
        autocompletion: true,
        closeBrackets: true,
        highlightActiveLine: true
      }}
      extensions={[langs.cpp()]}
      height="80vh"
      onChange={onChange}
    />
  );
}
