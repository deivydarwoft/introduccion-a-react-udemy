import ClaseComponent from "../componentes/ClaseComponent"

import getHistoryData from "../JSON/getHistoryData"

import getMathData from "../JSON/getMathData"

export default () => (
	<div>
		<h1 style={{textAlign:"center"}}>Curso del plan</h1>
		<div style={{display:"flex", justifyContent:"space-around"}}>
			<ClaseComponent nombre="matemática" clase = {getMathData}/>
			<ClaseComponent nombre="historia" clase = {getHistoryData}/>
		</div>
		<style jsx>
		{`
			body{
				background: #ffca20;
			}
		`}
		</style>
	</div>
)
