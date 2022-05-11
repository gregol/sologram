import React from 'react';
import { render, screen } from '@testing-library/react';

import { configureStore } from "@reduxjs/toolkit";

import { listPosts } from '../../common/infrastructure/manageLocalStorage';
import { actionCreators } from "../../common/infrastructure/redux/store/actions";
import reducer from "../../common/infrastructure/redux/store/reducer";
import { v4 } from 'node-uuid'
import { Post } from '../domain/post.entity';


const store = configureStore({ 
    reducer:reducer
});

test('Get data from LocalStorage', () => {
    let listPost = listPosts(1)
    expect(listPost?.items?.length).toBe(undefined);
});


test('Add Post', () => {
    let state = store.getState().items;
    let id =  '1'; //v4();
    const postData = {
            id: id,
            isLiked: false,
            isBookmarked: false,
            likeCount: 0,
            image: 'http://image',
            filter: 'none',
            created_at: Date.now(),
            user: {
                username: "Gregol",
                email: 'greg@gmmail.com',
                avatar: null
            }
        }
    store.dispatch(actionCreators.addToList(postData));
    const initialPostCount = state.length;


    state = store.getState().items;
    const newlyPost = state.find((post: Post) => post.id === id);
    expect(newlyPost?.image).toBe('http://image');
    expect(newlyPost?.user.email).toBe('greg@gmmail.com');
    expect(state.length).toBeGreaterThan(initialPostCount);
});


test('Like', () => {
    let state = store.getState().items;
    store.dispatch(actionCreators.like('1'));
    state = store.getState().items;
    const postLiked = state.find((post: Post) => post.id === '1');
    expect(postLiked?.isLiked).toBe(true);
    expect(postLiked?.likeCount).toBeGreaterThanOrEqual(1)

});
