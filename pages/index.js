import {BasicPicker} from "react-color-tools"
import Header from "../componentes/comunes/Header"
import ClaseComponent from "../componentes/ClaseComponent"
import getHistoryData from "../JSON/getHistoryData"
import getMathData from "../JSON/getMathData"
import Menu from '../componentes/comunes/Menu'
const Contenedor = (props) => (
	<div 
		style={{
			"backgroundColor": props.color
		}}>
		{props.children}
	</div>

)
class Index extends React.Component {
	state = {
		color1: " #ffca20",
		color2: " #088da5"
	}
	render(){
		const {color1, color2} = this.state
		return (
			<React.Fragment>
				<Header/>
				<Menu/>
				<Contenedor color={color1}>
					<h1 style={{textAlign:"center"}}>Curso del plan</h1>
					<div style={{display:"flex", justifyContent:"space-around"}}>
						<ClaseComponent nombre="matemática" clase = {getMathData}/>
						<ClaseComponent nombre="historia" clase = {getHistoryData}/>
					</div>
					<BasicPicker
						color={this.state.color}
						onChange={(color1)=>this.setState({color1})}
					/>
				</Contenedor>
				<Contenedor color={color2}>
					<h1 style={{textAlign:"center"}}>Curso del plan</h1>
					<div style={{display:"flex", justifyContent:"space-around"}}>
						<ClaseComponent nombre="matemática" clase = {getMathData}/>
						<ClaseComponent nombre="historia" clase = {getHistoryData}/>
					</div>
					<BasicPicker
						color={this.state.color}
						onChange={(color2)=>this.setState({color2})}
					/>
				</Contenedor>
			</React.Fragment>
		)
	}
	
}
export default Index