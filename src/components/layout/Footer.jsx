import React from 'react'
import styled from 'styled-components';

const Foot = styled.footer`
  display: block;
  text-align: center;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  align-items: center;
  justify-content: center; 
  background-color: #333;
  padding: 1em;
  font-size: 2rem;
`

function Footer() {
  const getDate = new Date();
  const formatedDate = getDate.toLocaleDateString('lt-Lt', {dateStyle: 'medium'})

  return (
    <div className="container">
     <Foot>
        &copy; {formatedDate} Made with  💙
     </Foot>
    </div>
  )
}

export default Footer