import React from 'react';



export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            homeLink: props.initialLinkName
        }
    }


    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                            <button onClick={this.props.greet} className='btn btn-primary'>Greet</button>
                            {/* <li><a href="#">HOME</a></li> */}
                        </ul>
                        <hr />
                        <input type='text' value={this.state.homeLink}
                            onChange={(event) => this.onHandleChange(event)} />
                        <button onClick={this.onChangeLink.bind(this)} className='btn btn-primary'>Change in Header</button>

                    </div>
                </div>
            </nav>
        )
    }
}