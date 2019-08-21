import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val:'',
      list: [],
    };
  }


  add = element => {
    let val=element.target.value
    this.setState({
     val
    })
   }
 
   onAddItem=()=> {
     let item=this.state.val,
       list=this.state.list;
       list.push(item);
 
     this.setState({
       list
     })
   }
   updateExistingItem=i=>{
    let valupdate=i.target.value
    
    this.setState({
      value_update:valupdate
    })
   }
   onUpdateItem = i => {
      let item1=this.state.value_update;
      console.log(item1);
      let list=this.state.list;

          let list1 = list.map((item, j) => {
            if (j === i) {
            return item+1;
            } else {
              return item;
            }
          });

          this.setState({
            list1
          })
  }

  onRemoveItem = i => {
    let item=this.state.list;

     const list=item.filter((item,j)=>i !== j);
 
     this.setState({
       list
     })
  };

  render() {
    let val1=this.state.val;
    let list1= this.state.list;
    let newvalupdate=this.state.value_update;
    return (
      <div>
        <ul>
          {list1.map((item, index) => (
            <li key={index}>{item}
             <button onClick={this.onRemoveItem.bind(this,index)}>Remove</button>
             <button onClick={this.onUpdateItem.bind(this,index)}> Update Item</button>
            <input type="text" placeholder="Update item here" value={newvalupdate} onChange={this.updateExistingItem}/>
              <br></br>
        
              </li>
          ))}

              <input type="text" value={val1} onChange={this.add}/>
              <br></br>
              <button onClick={this.onAddItem}>Add</button>

             
              <br></br>
              




           
        </ul>
      </div>
    );
  }
}

export default App;