class Calculadora extends React.Component{
    state ={
        res:"0"
    }
    
    render(){
        const alertar = ()=> alert('haz dado clic.')
        
        return (
            <div>
                <h1>Calculadora</h1>
                <div className="z-depth-2 teal white-text center-align resultado">
                    {this.state.res}
                </div>
                <div style={{textAlign:"center"}}>
                    <a className="waves-effect waves-light btn" onClick={alertar}>0</a>
                    <a className="waves-effect waves-light btn">1</a>
                    <a className="waves-effect waves-light btn">2</a>
                </div>
                <style jsx>
                    {`
                        .resultado{
                            width:300px;
                            margin: 0 auto;
                            font-size: 32px;
                            margin-bottom: 10px
                        }
                    `}
                </style>
            </div>
        )
    }
}
export default Calculadora