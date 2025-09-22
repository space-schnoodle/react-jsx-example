// 4) Create a component
export default function App() {
  /* Example 1
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{new Date().toLocaleTimeString()}</h1>;
  */

  /*Example 2
  const inputType = 'number';
  const minValue = 5;

  return <input 
    type={inputType} 
    min={minValue} 
    max={10} 
    style={{border: '3px solid red'}}
  />*/

  /*Example 3 
  return <textarea autoFocus={true} />;
  */

  /*Example 4 */
  return <input 
    maxLength={5} 
    spellCheck
    style={{border: '1px solid blue'}}
  />; 
}