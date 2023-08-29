import React from 'react';
import Todo from './todo';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 24px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
`;

function List({ todos, setTodos }) {
    const onDeleteHanlder = (todoId) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId;
        });

        setTodos(newTodos);
    };

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            } else {
                return { ...todo };
            }
        });

        setTodos(newTodos);
    };
    return (
        <Container>
            <h2>Working.. 🔥</h2>
            <Wrapper>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHanlder={onDeleteHanlder}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </Wrapper>
            <h2>Done..! 🎉</h2>
            <Wrapper>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHanlder={onDeleteHanlder}
                                onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </Wrapper>
        </Container>
    );
}

export default List;
