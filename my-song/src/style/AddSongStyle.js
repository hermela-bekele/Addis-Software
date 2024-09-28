import { css } from '@emotion/react';
export const containerStyle = css`
  padding: 2rem;
  background-color: purple;
`;

export const rowStyle = css`
  margin-bottom: 1rem;
`;

export const labelStyle = css`
  display: block;
  margin-bottom: 0.5rem;
`;

export const inputStyle = css`
  width: 15%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const errorStyle = css`
  color: red;
`;
export const audioPreviewContainer = css`
  display: flex;
  align-items: center; 
  margin-bottom: 1rem; 
  
  input[type="file"] {
    margin-right: 1rem; 
  }
`;

export const buttonStyle = css`
    display:block;
    
  color: black;
    background-color: linear-gradient(45deg, #33C3F0, #FF6F61);
    border-color: #FF6F61;
    height: 38px;
    padding: 0 20px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor:pointer;
    border-radius: 4px;
    border: 1px solid #bbb;
    box-sizing: border-box;
     transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #2aa6cc; /* Darker shade on hover */
  }
     &:active {
    background-color: #FF3B30; /* Even darker shade when active */
  } 
`;