class Calculadora extends React.Component{
    state ={
        res:""
    }
    onDigit = (digit) => {
        const expresion = this.state.res + digit
        this.setState({
            res:expresion
        })
    }
    ejecutarOperacion = () => {
        const resultados = eval(this.state.res)
        console.log(resultados)
        this.setState({
            res:resultados
        })
    }
    
    render(){
        const alertar = ()=> alert('haz dado clic.')
        
        return (
            <div>
                <h1>Calculadora</h1>
                <div className="z-depth-2 teal white-text center-align resultado">
                    {this.state.res || "0"}
                </div>
                <div className="calc-container blue lighten-3 hoverable z-depth-2">
                    {
                        ["1","2","3","4","5","6","7","8","9","0","."].map(digit => {
                            return (
                            <a className="waves-effect waves-light btn" onClick={()=>this.onDigit(digit)}>{digit}</a>
                            )
                        })  
                    }
                </div>
                <div className="operadores center-align">
                    {
                        ["+","-","*","/"].map(digit => {
                            return (
                            <a className="waves-effect waves-light btn deep-orange darken-1" onClick={()=>this.onDigit(digit)}>{digit}</a>
                            )
                        })  
                    }
                    <a className="waves-effect waves-light btn deep-orange darken-1" onClick={()=>this.setState({res:""})}>C</a>
                    <a className="waves-effect waves-light btn deep-orange darken-1" onClick={()=>this.ejecutarOperacion()}>=</a>
                </div>
                <style jsx>
                    {`
                        .resultado{
                            width:300px;
                            margin: 0 auto;
                            font-size: 32px;
                            margin-bottom: 10px
                        }
                        .calc-container{
                            width: 300px;
                            margin: 0 auto;
                            text-align: center;
                            padding: 12px;
                        }
                        .calc-container a{
                            margin: 5px;
                        }
                        .operadores{
                            border: 1px solid #ccc;
                            padding: 10px;
                            margin-top:20px;
                        }
                    `}
                </style>
            </div>
        )
    }
}
export default Calculadora