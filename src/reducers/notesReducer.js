import { SET_NOTES } from "../actions/TYPES";

export default function notesReducer (
    state = {
        notes: null,
    },
    action 
) {
    switch(action.type) {
        case SET_NOTES:
            return {
                ...state,
                notes: action.payload,
            };
        default:
            return state; 
    }
}