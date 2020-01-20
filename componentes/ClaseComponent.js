export default (props) =>(
	<div id={"clase-container"}>
		<div>
			<h2>Clase de {props.nombre}</h2>
			{props.clase.map(item => {
				return (
					<div className={"clase-list"} key={item.id.toString()}>
						<img src={item.photo} alt=""/>
						<p>{item.first_name} {item.last_name}</p>
					</div>
				)
			})}
		</div>
		<style jsx>
			{`
			  	#clase-container{
					perspective: 500px;
				}
				.clase-list{
					display: flex;
				}
				.clase-list:hover{
					transform: translateY(10px)scale(1);
				}
				.clase-list img{
					padding: 5px;
				}
				.clase-list p{
					font-size: 14px;
					font-weight: bold;
					margin-left: 15px;
				}

			`}
		</style>
	</div>
)