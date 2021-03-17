import React from 'react';

class SearchBar extends React.Component{

    state={term:''};
    onInputChange(event){
        console.log(event.target.value);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e=>this.setState({term:e.target.value})}/>
                        {/* <input type="text" onChange={this.onInputChange}/> */}
                        {/* In order to avoid to call an external function I can do it when I have just one line inside of the function
                            <input type="text" onChange={e=>console.log(e.target.value)}/>
                        */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;