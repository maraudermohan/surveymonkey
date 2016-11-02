import React from 'react';
import ModalComponent from './ModalComponent';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  titleTextObj() {
  let obj = {
  title : "Lorem ipsum",
  text1 : "Lorem ipsum dolor sit amet, pri ceteros gubergren ea. An usu duis doctus theophrastus, eam an eruditi nusquam accusam. Tota copiosae tractatos nam at, vim an probo ornatus, duo meis legimus comprehensam et. "
  +"Discere petentium vis cu, eos ea primis consequat. Ea ius intellegam interpretaris. Cu eum omnis diceret denique, cu eum ipsum essent appetere. Ad nam solet labore, tota maiorum eos ea. Cibo movet melius cum ut, duo ut cibo quidam repudiandae. "
  +"Interpretaris conclusionemque cu sed. Solet numquam oportere eum ea. Solum quaeque pro at, nec suavitate efficiendi id. Nam tacimates expetenda tincidunt ut, ad est dico verear saperet, cum te civibus appareat adolescens. Vis ea vide delenit, est viderer albucius molestie ut.",
  text2 : "Ius tation ancillae fastidii cu, ei pri suas exerci similique, cu sed enim posse philosophia. Est liber simul ceteros at. Ne amet harum labores quo, no tation populo has, sonet appetere suscipiantur quo ad. Ex duo aliquam adipiscing eloquentiam, "
  +"an illud offendit ius. Nobis verterem mei ex, sit alienum corrumpit definiebas ex. Facer adolescens honestatis cu pri. Quot quas imperdiet vis no, ignota nonumes eleifend pri te. Ex esse aeque vis. Ei usu duis summo convenire. Qui errem labore vivendo cu. "
  +"Minim graeco pericula vix id. Choro numquam consulatu at mel, prompta ocurreret duo ex, amet consulatu euripidis id sed. Adhuc recteque id sed, sit tacimates sapientem omittantur ad, ipsum suscipit sed at. Pro ne porro nobis, ne mea assum argumentum."};
  return obj;
  }

  buttonClickEvent() {

  }
  
  render() {
	let parentStyle = {
		display: 'flex',
		WebkitFlexDirection : 'column',
		flexDirection : 'column',
		WebkitJustifyContent: 'center',
		justifyContent: 'center',
		WebkitAlignItems: 'center',
		alignItems: 'center',
		height: '100%'
	}, buttonStyle = { display: 'inline-block',
		margin: '0 auto',
		width: '140px',
		height: '30px',
		fontSize: '16px'},
	modalContainerStyle = { display: 'none',
		width: '100%',
		top: 0,
		zIndex: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		WebkitJustifyContent: 'center',
		justifyContent: 'center',
		WebkitAlignItems: 'center',
		alignItems: 'center'};
    return (
      <div style={parentStyle}>
        <button style={buttonStyle} onClick={function (){ 
			document.getElementById('modal-container').style.display = 'flex';
		}}>Open Modal</button>
        <div id="modal-container" style={modalContainerStyle} onClick={function (){ 
			document.getElementById('modal-container').style.display = 'none';
		}}>
			<ModalComponent data={this.titleTextObj()} />
        </div>
      </div>
    );
  }
}

export default App;
