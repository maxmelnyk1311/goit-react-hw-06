import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const slice = createSlice({
    name: "contacts",
    initialState: {items: []},
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (value) => {
                return {
                    payload: {
                        id: nanoid(10),
                        ...value,
                    }
                }
            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    }
})

export const selectContacts = (state) => state.contacts.items;

export const {addContact, deleteContact} = slice.actions;

export default slice.reducer;
