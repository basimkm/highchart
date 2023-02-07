import json from './jsonServer';

export const addData = (data) => json.post('posts', data);
export const getData = () => json.get('posts');
export const getDataId = (id) => json.get(`posts/${id}`);
export const updateData = (id, data) => json.patch(`posts/${id}`, data);
export const deleteData = (id) => json.delete(`posts/${id}`);
