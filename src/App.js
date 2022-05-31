import logo from './logo.svg';
import './App.css';

function App() {
   const nayoks=['Shah-Rukh','SalmanKhn','Amir-Khan','Ranbir-Kapor','Sakib-Khan']
   const products=[
     {name:'photoshop',price:'$2.10'},
     {name:'Illastrator',price:'$1.23'},
     {name:'PDF-Reader',price:'$1.20'},
     {name:'Adobe-Illastrator',price:'$5.65'}
   ]

  const friends=[
    {name:'Sifat',hoby:'talking with gf'},
    {name:'noble',hoby:'Coding'},
    {name:'Muntasir',hoby:'CG'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ul>
         {
           nayoks.map(nayok=> <li>{nayok}</li>)
         }
         {
           products.map(product=><li>{product.name}</li>)
         }
         {
           products.map(pd=><Product product={pd}></Product>)
         }
         {
           friends.map(fd=><Friend friend={fd}></Friend>)
         }
     
       </ul>
       <Person nayokname={nayoks[2]} nayika="Mou"></Person>
       <Person nayokname={nayoks[0]} nayika="Nusrat"></Person>
       <Person nayokname={nayoks[1]} nayika="Anonymous"></Person>
      </header>
    </div>
  );
}
function Friend(props){
  const friendStyle={
    border:'3px solid gray',
    margin:'10px',
    padding:'20px',
  }
  return(
    <div style={friendStyle}>
        <h1>{props.friend.name}</h1>
        <h3>{props.friend.hoby}</h3>
    </div>

  )
}
function Product(props){
 const productStyle={
  border:'3px solid gray',
  margin:'10px',
  padding:'20px',
  display:'inline-block'
 }
 return (<div style={productStyle}>
    <h2>{props.product.name}</h2>
    <h4>{props.product.price}</h4>
 </div>
 ) 
}
function Person(props){
  const personStyle={
      border:'3px solid gray',
      margin:'5px',
      padding:'20px',
  }
  return (<div style={personStyle}>
  <h1 >Nayok:{props.nayokname}</h1>
  <h3>Heroes of {props.nayika}</h3>
  <h4>{props.nayokname} is a motivator for all</h4>
  </div>
  )
}
export default App;
