import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

window.BlockNoteEditor = BlockNoteEditor;
window.BlockNoteView = BlockNoteView;
window.useBlockNote = useBlockNote;

window.createEditor = BlockNoteEditor.createEditor;
