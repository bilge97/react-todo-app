import React from 'react';

class SearchBar extends React.Component{

    state = { term: '' };

    onFormSubmit= event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);

    };

    render(){
        return(
            <div id = "ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form"  >
                    <div className="field">

                        <label>What do you want to search? (trees, cars...)</label>
                            <input
                                       type="text"
                                       value = {this.state.term}
                                       onChange={e => this.setState({term: e.target.value})}
                            />
                    </div>
                </form>
            </div>
        );
    }

}



export default SearchBar;