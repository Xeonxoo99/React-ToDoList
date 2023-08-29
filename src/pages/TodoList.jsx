import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import List from '../components/List';
import Layout from '../components/Layout';
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: false,
        },
        {
            id: 2,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: true,
        },
    ]);

    return (
        <>
            <Layout>
                <Header />
                <Form setTodos={setTodos} todos={todos} />
                <List todos={todos} setTodos={setTodos} />
            </Layout>
        </>
    );
}

export default TodoList;
