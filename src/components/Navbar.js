import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    state = {
        query: ""
    }
    onChangeHandler = (e) => {
        this.setState({query: e.target.value})
    }
    onClickHandler = (e) => {
        this.props.updateQuery(this.state.query);
        this.setState({query: ""})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand fw-bold h1" to="/">Apni<span className="text-success">News</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/technology">Technology</Link>
                            </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" value={this.state.query} onChange={this.onChangeHandler} type="search" placeholder="Search here" aria-label="Search" />
                        <Link to={`/${this.state.query}`} className="btn btn-success" onClick={this.onClickHandler}>Search</Link>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;