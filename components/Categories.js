import React from 'react'; 
import styled from 'styled-components/native'; 
import colours from './Colours';

const Categories = props => <Name>{props.name}</Name>;

export default Categories;

const Name = styled.Text` 
    font-size: 16px; 
    font-weight: 300;
    font-family: 'Arial';
    margin-left: 15px; 
    color: black};
`; 