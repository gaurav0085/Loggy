import React from "react";

class AddContact extends React.Component{

    state={
        name: "",
        number: "",
        email: "",
    };

    add =(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="" || this.state.number==="")
        {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email:"", number:""});
    }

    render() {
        return (
             <div className="ui main">
                 <h2>Add Contact</h2>
                 <form className="ui form" onSubmit={this.add}>
                     <div className="field">
                         <label>Name</label>
                         <input type="text" 
                            name="name" 
                            placeholder="name" 
                            value={this.state.name}
                            onChange={(e)=> this.setState({name: e.target.value})}
                            />
                     </div>
                     <div className="field">
                         <label>Mobile Number</label>
                         <input type="text" 
                            name="number" 
                            placeholder="number" 
                            maxLength="10"
                            value={this.state.number}
                            onChange={(e)=> this.setState({number: e.target.value})}
                            />
                     </div>
                     <div className="field">
                         <label>Email</label>
                         <input type="text" 
                            name="email" 
                            placeholder="email"
                            value={this.state.email}
                            onChange={(e)=> this.setState({email: e.target.value})}
                            />
                     </div>
                     <button className="ui button blue">Add</button>
                 </form>
             </div>
        );
    }
}


export default AddContact;