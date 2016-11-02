import React, {PropTypes} from 'react';

const ModalComponent = (props) => {
  let modalStyle = {
      width: '85%',
      backgroundColor: 'white',
      border: '2px #555555 solid',
      paddingBottom: 20,
      borderRadius: 10,
      position: 'relative'
    }, titleStyle = {
      padding: 10,
      margin: 0,
      backgroundColor: '#555555',
      color: 'white'
    }, pStyle = {
      padding: '0 25px'
    }, parentSpanStyle = {
      display: 'inline-block',
      position: 'absolute',
      right: 10,
      top: 10,
      width: 30,
      height: 30
    }, xSpanStyle1 = {
      width: 30,
      height: 6,
      backgroundColor: 'white',
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 13
    }, xSpanStyle2 = {
      width: 30,
      height: 6,
      backgroundColor: 'white',
      transform: 'rotate(-45deg)',
      position: 'absolute',
      top: 13
    };
  return (
    <div style={modalStyle} onClick={function (event) {event.stopPropagation();}}>
      <h3 style={titleStyle}>{props.data.title}
        <div style={parentSpanStyle} onClick={function () { 
          document.getElementById('modal-container').style.display = 'none';
        }}>
          <span style={xSpanStyle1}></span>
          <span style={xSpanStyle2}></span>
        </div>
      </h3>
      <p style={pStyle}>{props.data.text1}</p>
      <p style={pStyle}>{props.data.text2}</p>
    </div>
  );
};

ModalComponent.propTypes = {
  data: PropTypes.object.isRequired
};

export default ModalComponent;
