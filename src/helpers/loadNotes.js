import { db } from "../firebase/firebaseConfig"

export const loadNotes = async (uid)=>{

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes = [];

    notesSnap.forEach(noteSnap=>{
        notes.push({
            id: noteSnap.id,
            ...noteSnap.data()
        })
    });

    return notes;
}