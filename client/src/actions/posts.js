import * as api from "../api/index";
import {CREATE, UPDATE, LIKE, FETCH_ALL, DELETE} from '../constants/actionTypes'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        console.log(id);
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        console.log("like trigger");
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}