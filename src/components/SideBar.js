import React, {Component} from 'react';

class SideBar extends Component{

    render(){
        return(
            <aside className="sidebar_container">
                <section>Roll DICE</section>
                <section>Player Race</section>
                <section>Character Background</section>
                <section>Class</section>
            </aside>            
        )
    }

}

export default SideBar;