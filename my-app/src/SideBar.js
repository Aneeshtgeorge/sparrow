import React from 'react'   
import MenuIcon from '@material-ui/icons/Menu';
import SimpleTable from "./SimpleTable"

class SideBar extends React.Component{
    constructor(){
        super()
        this.state = {
            drawerPos: 0,
            id: 0
        }
        this.handleDrawer=this.handleDrawer.bind(this)
        this.handleChangem=this.handleChangem.bind(this)
        this.handleChanged=this.handleChanged.bind(this)
    };
    
    handleChangem(){
        this.setState({
          id: 1
        })
    }
    handleChanged(){
      this.setState({
        id: 0
      })
  }
    
    handleDrawer(){
        if (this.state.drawerPos < 2) {
            this.setState((state)=> ({
                drawerPos: state.drawerPos + 2
            }));
          } else {
              this.setState({
                drawerPos: 0
              })
          }
      };
    render() {
      let a=this.state.id?<SimpleTable />:"main"   
      let drawerClass = [];
      let mainClass = [];
      if (this.state.drawerPos === 1) 
      {
          drawerClass.push("drawerMin");
          mainClass.push("mainMin")
      } 
      else if (this.state.drawerPos === 2) 
      {
          drawerClass.push("drawerOpen");
            mainClass.push("mainOpen");
        } 
        else {
              drawerClass = [];
              mainClass = [];
          }
      
        return (
          
          <div className="App">
          <navbar> <i className="material-icons" onClick={this.handleDrawer}><MenuIcon /></i> <h3> Gym Application</h3> 
          </navbar>
          <aside className={drawerClass.join(" ")} >
            <ul>
              <li onClick={this.handleChanged}><span>Dashboard</span></li>
              <li onClick={this.handleChangem}><span>Member</span></li>
              
            </ul>
          </aside>
          <main className={mainClass.join(" ")}>
              <h1>{a}</h1>
          </main>
          </div>
          
          
          )
    }
}

export default SideBar