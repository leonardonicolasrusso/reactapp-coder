import { useState } from 'react' 

const Select = ({ options, onSelect, defaultOption }) => {
  return (
      <select 
        onChange={(ev) => {
          onSelect(ev.target.value)
        }}>
          { options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
        </select>
  )
}

const Contact = () => {
  const [option, setOption] = useState('central')
  const options = [
    { value: 'central', text: 'Casa Central'},
    { value: 'sucursal', text: 'Sucursal'}
  ]

  const optionSelected = (value) => {
    setOption(value)
  }

    return (
      <div className="Contact">
        <h1>Contact</h1>
        <h3>Elija con que sucursal quiere comunicarse</h3>
        <Select 
          options={options}
          onSelect={optionSelected}
          defaultOption={'central'}
        />
        <h3>Escriba su mensaje</h3>
        <textarea />
        <button onClick={() => console.log('Su mensaje a sido enviado a: ' + option)}>Enviar Mensaje</button>
      </div>
    );
  }
  
  export default Contact;