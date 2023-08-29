import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`;

const SetBtn = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`;

const Btn = styled.button`
    background-color: #fff;
    border: 2px solid ${(props) => props.btnColor};

    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 130px;
`;

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
    return (
        <Wrapper>
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <SetBtn>
                <Btn btnColor="red" onClick={() => onDeleteHanlder(todo.id)}>
                    삭제하기
                </Btn>
                <Btn btnColor="teal" onClick={() => onEditHandler(todo.id)}>
                    {todo.isDone ? '취소' : '완료'}
                </Btn>
            </SetBtn>
        </Wrapper>
    );
}

export default Todo;
