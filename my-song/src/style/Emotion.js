import { css } from '@emotion/react';
export const containerStyle = css`
  padding: 20px;
`;
export const titleStyle = css`
  text-align: center;
  font-size: 5rem; 
  color: black; 
  margin-bottom: 2rem; 
`;
export const createStyle = css`
    margin-right: 10px;
    color: black;
    background-color: #FFF;
    border-color: black;
    height: 38px;
    padding: 0 30px;
    text-align: center;
    font-size: 13px;
    font-weight: 800;
    line-height: 38px;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    box-sizing: border-box;
    margin-bottom:2rem;
    transition: background-color 0.3s; 

  &:hover {
    background-color: purple; 
  }
    
`;
export const playStyle = css`
    margin-right: 10px;
    color: black;
    background-color: #FFF;
    border-color: black;
    height: 38px;
    padding: 0 30px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    box-sizing: border-box;
    transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #2aa6cc; /* Darker shade on hover */
  }
    
`;
export const deleteStyle = css`
    color: black;
    background-color: #FFF;
    border-color: black;
    height: 38px;
    padding: 0 30px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    box-sizing: border-box;
    transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #e60000; /* Darker red on hover */
  }

`;
export const updateStyle = css`
    margin-right: 110px;
    color: black;
    background-color: #FFF;
    border-color: black;
    height: 38px;
    padding: 0 20px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    box-sizing: border-box;
    transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #2aa6cc; /* Darker shade on hover */
  }
    
`;

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  background-color: purple;

  th, td {
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
    color: #FFF;
    border-bottom: 1px solid #E1E1E1;
  }

  tr {
    border-bottom: 1px solid #ddd; /* Add only horizontal lines */
}
  th {
    padding: 2rem;
    color: #FFF;
    background-color: purple;
  }
`;