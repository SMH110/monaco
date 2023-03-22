import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';


// Editor placeholder
const editorHost = document.getElementById("editor");

const editorInstance = monaco.editor.create(editorHost, {
     value: "let x = 1",
     theme: "vs-dark",
     language: "typescript"
});


editorInstance.onDidChangeModelContent(event => console.log("event", event));
editorInstance.onDidChangeModel(event => {
    console.log("")
})
console.log(monaco)