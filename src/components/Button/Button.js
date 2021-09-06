// import { Component } from 'react'
import './Button.css'

// class Button extends Component {
//     render() {
//         return (
//             <button onClick={this.props.myFunction} className='button'>{this.props.label}</button>
//         )
//     }
// }

const Button = ({ myFunction, label }) => {
     return (
         <button onClick={myFunction} className='button'>{label}</button>
     )
 }

 export default Button