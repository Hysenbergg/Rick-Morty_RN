export default (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const {favoriteJob} = action.payload;
            return {
                ...state,
                favoriteJob: [...state.favoriteJob, favoriteJob]
            };
        case 'REMOVE_FAVORITE':
            return{
                favoriteJob: [
                    ...state.favoriteJob.filter(job => job !== action.payload.job),
                ],
            };
        default:
            break;
    }
}