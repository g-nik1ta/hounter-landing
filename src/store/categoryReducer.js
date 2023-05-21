const defaultState = {
    category: 'House'
}

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export const changeCategoryCreator = (payload) => ({ type: CHANGE_CATEGORY, payload });
