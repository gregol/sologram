import { Post } from "../../posts/domain/post.entity";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('sologram');
        if (serializedState === null) {
        return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    } 
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('sologram', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const listPosts = (page: number) => {
    const RESULT_BY_PAGE: number = 2;
    let itemsLocalStorage = loadState();
    let minResult = (page-1) * RESULT_BY_PAGE;
    let maxResult = page * RESULT_BY_PAGE;
    const totalPage : number = Math.ceil(itemsLocalStorage?.items.length / RESULT_BY_PAGE);
    
    return {
        items: itemsLocalStorage?.items.slice(minResult, maxResult),
        totalPage: totalPage
    }
}