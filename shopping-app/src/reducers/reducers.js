const initialState = {
    bookmarks: [],
}

const bookMarkReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOKMARK':
            return {
                bookmarks : [...state.bookmarks, action.payload],
            };
        case 'REMOVE_BOOKMARK': 
            return {
                bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== action.payload),
            };
        default:
            return state;
    }
    
}



export default bookMarkReducer;
