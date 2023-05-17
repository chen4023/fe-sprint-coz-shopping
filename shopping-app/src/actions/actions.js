export const addBookmark = (bookmark) => {
    return {
        type:'ADD_BOOKMARK',
        payload: bookmark,
    };
};

export const removeBookMark = (bookmark) => {
    return {
        type: 'REMOVE_BOOKMARK',
        payload: bookmark.id,
    };
};